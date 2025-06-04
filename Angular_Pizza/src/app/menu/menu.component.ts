import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

   MenuList = [
  {
    name: "Pepperoni Pizza",
    image: "./pepperoni.jpg",
    price: 15.99,
  },
  {
    name: "Margherita Pizza",
    image: './margherita.jpg',
    price: 11.99,
  },
  {
    name: "Special Pizza",
    image: "./specialpizza.jpg",
    price: 256.53,
  },
  {
    name: "Vegan Pizza",
    image: "./vegan.jpg",
    price: 17.99,
  },
  {
    name: "Pineapple Pizza",
    image: "./pineapple.jpg",
    price: 4.99,
  },
  {
    name: "Very Expensive Pizza",
    image: "./expensive.jpg",
    price: 1997.99,
  },
];

}
