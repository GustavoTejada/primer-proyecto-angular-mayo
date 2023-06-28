import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.login('gtejada@folcode.com', 'prueba123');
    this.registrar('aruiz@folcode.com', 'prueba123');
  }

  login(email: string, password: string) {
    this._authService.login(email, password).then((userCredential) => {
      console.log('userCredentialInComponent', userCredential);
    }).catch((error) => {
      console.log('error', error);
    });
  }

  registrar(email: string, password: string) {
    this._authService.registrar(email, password).then((userCredential) => {
      console.log('userCredentialInComponent', userCredential);
    }).catch((error) => {
      console.log('error', error);
    });
  }

  loginWithGoogle() {
    this._authService.loginWithGoogle().then((userCredential) => {
      console.log('userCredentialInComponent', userCredential);
    }).catch((error) => {
      console.log('error', error);
    });
  }

}
