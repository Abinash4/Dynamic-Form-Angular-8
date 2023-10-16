import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AddEditDeleteValueDynamicallyComponent } from './add-edit-delete-value-dynamically/add-edit-delete-value-dynamically.component';
import { AddDocumentWithTagNumbersComponent } from './add-document-with-tag-numbers/add-document-with-tag-numbers.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';


const routes: Routes = [
  { path: 'dynamicForm', component: DynamicFormComponent },
  { path: 'add_Edit_Delete_Value', component: AddEditDeleteValueDynamicallyComponent },
  { path: 'add_Document', component: AddDocumentWithTagNumbersComponent },
  { path: 'docView', component: DocViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
