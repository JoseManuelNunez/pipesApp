import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/here.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styles: ``
})
export class OrderPageComponent {

  isUpperCase = false

  sortBy?: keyof Hero

  heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
    },
    {
      name: "Badman",
      canFly: false,
      color: Color.black
    },
    {
      name: "Daredevil",
      canFly: false,
      color: Color.red
    },
    {
      name: "Robin",
      canFly: false,
      color: Color.red
    },
    {
      name: "Linterna Verde",
      canFly: false,
      color: Color.green
    }
  ]

  toggleUpperCase() {
    console.log('first')
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Hero) {
    this.sortBy = value
  }

}
