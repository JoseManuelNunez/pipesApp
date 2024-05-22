import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  public MenuItem: MenuItem[] = [];

  constructor (private router: Router) {}

  ngOnInit() {
    this.MenuItem = [
      {
        label: 'Pipes de Angulas',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            command: () => {
              this.router.navigate([''])
            }
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            command: () => {
              this.router.navigate(['/numbers'])
            }
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            command: () => {
              this.router.navigate(['/uncommon'])
            }
          },
        ]
      },
      {
        label: "pipes personalizados",
        icon: 'pi pi-cog',
        items: [          {
          label: 'custom Pipes',
          icon: 'pi pi-globe',
          command: () => {
            this.router.navigate(['/custom'])
          }
        }]

      }
    ];
  }
}
