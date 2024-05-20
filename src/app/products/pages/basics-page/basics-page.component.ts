import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'jose manuel'
  public nameUpper: string = 'JOSE MANUEL'
  public nametitle: string = 'jOse manUeL'
  public customDate: Date = new Date()


}
