import { Component, OnInit ,Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  
  }


  
 
  getBackgroundImageUrl() { 
    return `url('../../assets/image/cattleBG.jpg')` 
  } 

}