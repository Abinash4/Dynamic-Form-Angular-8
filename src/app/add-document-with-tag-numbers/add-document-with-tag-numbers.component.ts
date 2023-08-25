import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-document-with-tag-numbers',
  templateUrl: './add-document-with-tag-numbers.component.html',
  styleUrls: ['./add-document-with-tag-numbers.component.scss']
})
export class AddDocumentWithTagNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  tagDocuments: { tagnumber: string, files: File[] }[] = [];
  uploadedStatus: Map<string, boolean> = new Map(); // Map to track uploaded status

  newTagNumber: string = '';

  uploadDocument(event: any, tagIndex: number, docIndex: number) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      const uploadedFile = fileList[0];
      if (uploadedFile.size <= 100 * 1024) { // Check if file size is less than or equal to 100KB
        let tagFiles = this.tagDocuments[tagIndex]?.files || [];
        tagFiles[docIndex] = uploadedFile;
        if (!this.tagDocuments[tagIndex]) {
          this.tagDocuments[tagIndex] = { tagnumber: tagIndex.toString(), files: [] };
        }
        this.tagDocuments[tagIndex].files = tagFiles;
      } else {
        // File size is too large
        console.log('File size exceeds 100KB.');
        event.target.value = ''; // Clear the input field
      }
    }
  }

  areAllDocumentsUploaded(tag: { tagnumber: string, files: File[] }): boolean {
    return tag.files.length === 4;
  }

  appendUpload(tagNumber: string) {
    const tagDocument = this.tagDocuments.find(tag => tag.tagnumber === tagNumber);
    if (tagDocument) {
      // Perform append logic and save logic here
      console.log(`Append Upload for Tag Number ${tagNumber}:`, tagDocument.files);
      this.uploadedStatus.set(tagNumber, true); // Mark as uploaded
      // Saving the documents for the tag number
      // Implement your save logic here
      console.log(`Saving Documents for Tag Number ${tagNumber}:`, tagDocument.files);
    }
  }

  addTagNumber() {
    if (this.newTagNumber) {
      const existingTag = this.tagDocuments.find(tag => tag.tagnumber === this.newTagNumber);
      if (!existingTag) {
        this.tagDocuments.push({ tagnumber: this.newTagNumber, files: [] });
      }
      this.newTagNumber = ''; // Clear input field
    }
  }

}