import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent {
  // Variables ____________
  burgerMenuIsOpen:boolean = false;







  openBurgerMenu():void{
    this.burgerMenuIsOpen = true;
  }

  closeBurgerMenu():void{
    this.burgerMenuIsOpen = false;
  }
}
