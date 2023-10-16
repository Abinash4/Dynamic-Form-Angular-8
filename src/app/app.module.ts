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
import { NgbCheckBox, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatteDetailsComponent } from './catte-details/catte-details.component';
import { AddEditDeleteValueDynamicallyComponent } from './add-edit-delete-value-dynamically/add-edit-delete-value-dynamically.component';
import { AddDocumentWithTagNumbersComponent } from './add-document-with-tag-numbers/add-document-with-tag-numbers.component'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';

// import { ModalModule } from 'ngx-bootstrap/modal';
 
@NgModule({
  declarations: [
    AppComponent,
    
    UniqueModalComponent,
    
    DynamicFormComponent,
    
    CatteDetailsComponent,
    
    AddEditDeleteValueDynamicallyComponent,
    
    AddDocumentWithTagNumbersComponent,
    DocViewerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ModalModule.forRoot(),
    
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
