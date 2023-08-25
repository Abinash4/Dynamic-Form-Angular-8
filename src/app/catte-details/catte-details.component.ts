import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-catte-details',
  templateUrl: './catte-details.component.html',
  styleUrls: ['./catte-details.component.scss']
})
export class CatteDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CatteDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public catteData: any
  ) {}
  
  ngOnInit(): void {
    
  }

  closeModal(): void {
    this.dialogRef.close();
  }


}


