import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-unique-modal',
  templateUrl: './unique-modal.component.html',
  styleUrls: ['./unique-modal.component.scss'],
  
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ],
  
})

export class UniqueModalComponent implements OnInit {

  // formData: any = {}; // Object to store form data
  // formBoxes: any[] = [{ name: '', email: '', isEditing: false }];
  formBoxes: any[] = [];


  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef<UniqueModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
  
  ngOnInit(): void {
    this.formBoxes = this.data.existingData || [];
  }


  onClose(): void {
    this.dialogRef.close();
  }

  onAddFormBox(): void {
    // this.formBoxes.push({ name: '', email: '', isEditing: false });
    const newFormBox = this.createFormGroup(); // Create a new form group
    this.formBoxes.push(newFormBox);
  }

  onEditForm(formBox: any, index: number): void {
    // Here you can handle the edit submission
    console.log('Form data edited:', formBox);

    // Set the edit mode to false after editing
    formBox.isEditing = false;
    console.log(formBox);
  }

  onDeleteFormBox(index: number): void {
    this.formBoxes.splice(index, 1);
  }

  onSubmitForm(formBox: any, index: number): void {
    // Here you can handle the submission of the form data
   if (formBox.formGroup.valid) {
      console.log('Form data submitted:', formBox.formGroup.value);

      // If the form data is not already in the list, add it
      if (!this.formBoxes.includes(formBox.formGroup.value)) {
        this.formBoxes.push(formBox.formGroup.value);
      }

      formBox.isEditing = false; // Exit edit mode after submitting
    }else{

      formBox.isEditing = true;
    }
  }

  private createFormGroup(): any {
    return {
      formGroup: this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        // Add more form controls here as needed
      }),
      isEditing: false
    };
  }
  
}