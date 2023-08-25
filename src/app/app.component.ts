import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatteDetailsComponent } from './catte-details/catte-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newNumber: number;
  numbers: number[] = [];
  numbersInRows: number[][] = [];
  // row: number[][]=[]
  title = 'web';
  constructor(public dialog: MatDialog , private router: Router) {}

  openModal(): void {
    const dialogRef = this.dialog.open(CatteDetailsComponent, {
      width: '400px',
      data: { name: 'Whiskers', age: 3, breed: 'Siamese' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed');
    });
  }


 

  
}