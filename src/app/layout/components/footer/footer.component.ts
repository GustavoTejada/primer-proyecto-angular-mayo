import { Component } from '@angular/core';

interface User {
  name: string,
  lastname: string,
  age: number,
  address: Address
}

interface Address {
  street: string,
  number: number
}

interface RedSocial {
  instagram: string,
  facebook: string,
  whatsapp: number
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

 usuario: User = {
  name: 'Gustavo',
  lastname: 'Tejada',
  age: 27,
  address: {
    street: 'Calle de ejemplo',
    number: 1755
  }
 }

 redesSociales: RedSocial = {
  instagram: 'www.google.com',
  facebook: 'etc',
  whatsapp: 123123123123
 }

}
