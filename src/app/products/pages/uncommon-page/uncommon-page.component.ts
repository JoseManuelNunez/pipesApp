import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n select
  public name: string = 'jose'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'melisa'
    this.gender = 'female'
  }

  // i18n plural

  public clients: string[] = ['jose','fatima','carmen','yabe','antonio','juan',]
  public clientsMap ={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift()
  }

  //keyValue pipe
  public person ={
    name: 'jose',
    age: 21,
    address: 'la vega'
  }

  //Async pipe
  public myObsercableTimer = interval(2000).pipe(
    tap(value => {
      console.log("tap", value)
    })
  )



}
