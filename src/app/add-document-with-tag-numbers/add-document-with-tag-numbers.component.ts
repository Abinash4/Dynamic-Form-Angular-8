import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component'; // Update with actual path


@Component({
  selector: 'app-add-document-with-tag-numbers',
  templateUrl: './add-document-with-tag-numbers.component.html',
  styleUrls: ['./add-document-with-tag-numbers.component.scss']
})
export class AddDocumentWithTagNumbersComponent implements OnInit {

  constructor(private api: CommonService ,public dialog: MatDialog) {}


  ngOnInit(): void {
    
  }
  
  tagDocuments: { tagnumber: string, files: File[] }[] = [];
  uploadedStatus: Map<string, boolean> = new Map(); // Map to track uploaded status

  newTagNumber: string = '';
  allDocumentsSubmitted = false;

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
      // this.uploadedStatus.set(tagNumber, true); // Mark as uploaded

      //add document logic
     
    let obj ={
      tagno:tagNumber, 
      files:tagDocument.files
    }

    const formData = new FormData();
    let myFiles :string[]=[];
    formData.append("uniqueNumber", tagNumber.toString());

      for (let i = 0; i < tagDocument.files.length; i++) {
        formData.append('files', tagDocument.files[i],tagDocument.files[i].name);
        // formData.append("FileName", file.name);
      }

      // console.log(obj);

      this.api.uploadtDoc(formData).subscribe(
        (res) => {
          console.log(res)
          console.log(res.Message)
          // console.log(JSON.parse(res))
          if (res.Message=="Files uploaded successfully") {
            alert("Email Sent Successfully");
            this.uploadedStatus.set(tagNumber, true); // Mark as uploaded
            this.checkAllDocumentsSubmitted();
          } else {
            alert("There is some issues please try again");
            this.uploadedStatus.set(tagNumber, false); // Mark as uploaded
          }
         
        }),(err) => {

          console.log(err.error["text"]);

        }
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

  isDocumentUploaded(tag: { tagnumber: string, files: File[] }, docIndex: number): boolean {
    return !!tag.files[docIndex];
  }
  
  getDocumentText(tag: { tagnumber: string, files: File[] }, docIndex: number): string {
    // return this.isDocumentUploaded(tag, docIndex) ? 'File uploaded' : 'Upload document';
    if (this.isDocumentUploaded(tag, docIndex)) {
      const uploadedFile = tag.files[docIndex];
      return uploadedFile.name; // Display the uploaded file name
    } else {
      return 'Upload document';
    }
  }


  checkAllDocumentsSubmitted() {
    // this.allDocumentsSubmitted = this.tagDocuments.every(tag => tag.files.length === 4);
    this.allDocumentsSubmitted = Array.from(this.uploadedStatus.values()).every(status => status);

  }


  openModal() {
    this.dialog.open(AppComponent, {
      width: '400px',
      data: { message: 'Hello from the modal!' } // Pass any data needed
    });
  }
  
}