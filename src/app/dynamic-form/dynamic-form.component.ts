import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Cattle {
  animalType: string;
  breed: string;
  age: number;
  gender: string;
  tagNumber: string;
  premium: number;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})



export class DynamicFormComponent implements OnInit {

  cattleList: Cattle[] = [];
  editingIndex: number = -1; 

  constructor() {
    
  }
  
  ngOnInit(): void {
    
  }

  newCattle: Cattle = {
    animalType: '',
    breed: '',
    age: 0,
    gender: '',
    tagNumber: '',
    premium: 0
  };

  
  addCattle() {
    this.cattleList.push({ ...this.newCattle });
    this.newCattle = {
      animalType: '',
      breed: '',
      age: 0,
      gender: '',
      tagNumber: '',
      premium: 0
    };
  }

  editCattle(index: number) {
    this.editingIndex = index;
    this.newCattle = { ...this.cattleList[index] };
  }

  cancelEdit() {
    this.editingIndex = -1;
    this.newCattle = {
      animalType: '',
      breed: '',
      age: 0,
      gender: '',
      tagNumber: '',
      premium: 0
    };
  }

  addCattleForm() {
    this.editingIndex = -2; // Use a distinct value to represent add mode
    this.newCattle = {
      animalType: '',
      breed: '',
      age: 0,
      gender: '',
      tagNumber: '',
      premium: 0
    };
  }

  saveEdit() {
    if (this.editingIndex !== -1) {
      this.cattleList[this.editingIndex] = { ...this.newCattle };
      this.cancelEdit(); // Reset the form after saving
    }
  }

  deleteCattle(index: number) {
    this.cattleList.splice(index, 1);
  }

  // 
}


