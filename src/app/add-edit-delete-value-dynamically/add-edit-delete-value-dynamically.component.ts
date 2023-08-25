import { Component, OnInit } from '@angular/core';


interface NumberWithFiles {
  number: number;
  files: File[];
}

interface cattleData {
  Scheme: "",
  animalType: "",
  breed: "",
  NoOfCattle: 0,
  age: 0,
  colour: "",
  identification: "",
  numbersWithFiles: NumberWithFiles,

}


@Component({
  selector: 'app-add-edit-delete-value-dynamically',
  templateUrl: './add-edit-delete-value-dynamically.component.html',
  styleUrls: ['./add-edit-delete-value-dynamically.component.scss']
})
export class AddEditDeleteValueDynamicallyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newNumber: number;
  numbers: number[] = [];
  numbersInRows: number[][] = [];
  numbersWithFiles: NumberWithFiles[] = [];



  animalType: string = ''; // Separate field for animal type
  age: number;         // Separate field for age
  premium: number ;
  Scheme: string = '';
  breed: string = '';
  NoOfCattle: number ;
  colour: string = "";
  identification: string = "";
  
  cattleData = {
    Scheme: "",
    animalType: "",
    breed: "",
    NoOfCattle: 0,
    age: 0,
    colour: "",
    identification: "",
    numbersWithFiles: this.numbersWithFiles,

  }

  cattleDataList: any[] = [];


  //
  username: string = "";
  clickme(val, inputName) {
    console.log("it does nothing", this.username);

  }

  addSection() {
    this.cattleDataList.push(this.cattleData);
    console.log(this.cattleDataList);
  }


  addNumber() {
    if (this.newNumber !== undefined && !this.numbers.includes(this.newNumber)) {
      this.numbers.push(this.newNumber);
      this.newNumber = undefined;
      this.updateNumbersInRows();
    } else {
      alert('Please enter a unique number.');
    }
  }



  editNumber(rowIndex: number, columnIndex: number) {
    const index = (rowIndex * 3) + columnIndex;
    const editedNumberInput = prompt('Edit number:', String(this.numbers[index]));
    if (editedNumberInput !== null) {
      const editedNumber = +editedNumberInput;
      if (!isNaN(editedNumber) && !this.numbers.includes(editedNumber)) {
        this.numbers[index] = editedNumber;
        this.updateNumbersInRows();
      } else {
        alert('Please enter a unique number.');
      }
    }
  }



  deleteNumber(rowIndex: number, columnIndex: number) {
    const index = (rowIndex * 3) + columnIndex;
    this.numbers.splice(index, 1);
    this.updateNumbersInRows();
  }

  private updateNumbersInRows() {
    this.numbersInRows = [];
    for (let i = 0; i < this.numbers.length; i += 3) {
      this.numbersInRows.push(this.numbers.slice(i, i + 3));
    }
  }

  handleFileInput(event: any, rowIndex: number, columnIndex: number) {
    const files = event.target.files;
    if (files) {
      const associatedNumber = this.numbersInRows[rowIndex][columnIndex];
      const numberWithFilesIndex = this.numbersWithFiles.findIndex(n => n.number === associatedNumber);
      if (numberWithFilesIndex !== -1) {
        const existingFiles = this.numbersWithFiles[numberWithFilesIndex].files;
        const updatedFiles: File[] = [...existingFiles, ...Array.from(files) as File[]];
        this.numbersWithFiles[numberWithFilesIndex].files = updatedFiles;
      } else {
        this.numbersWithFiles.push({
          number: associatedNumber,
          files: Array.from(files) as File[]
        });
      }
    }
    console.log(this.numbersWithFiles);
  }

  getFileData(number: number): File[] {
    const numberWithFiles = this.numbersWithFiles.find(n => n.number === number);
    return numberWithFiles ? numberWithFiles.files : [];
  }



  fileObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }

  isImage(file: File): boolean {
    return file.type.startsWith('image/');
  }

  AddAllData() {

    this.cattleData.Scheme = this.Scheme,
      this.cattleData.animalType = this.animalType,
      this.cattleData.breed = this.breed,
      this.cattleData.NoOfCattle = this.NoOfCattle,
      this.cattleData.age = this.age,
      this.cattleData.numbersWithFiles = this.numbersWithFiles
      this.cattleData.colour = this.colour
      this.cattleData.identification = this.identification
    console.log(this.cattleData);
    this.cattleDataList.push(this.cattleData);
    console.log(this.cattleDataList);

    this.Scheme = "",
      this.animalType = "",
      this.breed = "",
      this.NoOfCattle = 0,
      this.age = 0,
      this.identification = "",
      this.colour = "",
      this.numbersWithFiles = [],

      this.cattleData = {
        Scheme: "",
        animalType: "",
        breed: "",
        NoOfCattle: 0,
        age: 0,
        colour: "",
        identification: "",
        numbersWithFiles: this.numbersWithFiles,

      }

  }

}