import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  defaultName:string = "Votre nom :";
  defaultFirstName:string = "Votre prénom :";
  age:number = 0;



  setAge(age:number):void{
    this.age=100-age;
  }




  
}
