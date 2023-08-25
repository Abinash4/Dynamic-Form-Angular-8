import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UniqueModalComponent } from './unique-modal/unique-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatteDetailsComponent } from './catte-details/catte-details.component';
import { AddEditDeleteValueDynamicallyComponent } from './add-edit-delete-value-dynamically/add-edit-delete-value-dynamically.component';
import { AddDocumentWithTagNumbersComponent } from './add-document-with-tag-numbers/add-document-with-tag-numbers.component'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    
    UniqueModalComponent,
    
    DynamicFormComponent,
    
    CatteDetailsComponent,
    
    AddEditDeleteValueDynamicallyComponent,
    
    AddDocumentWithTagNumbersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
