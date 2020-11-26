import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false; // Utilisateur connecté ?
  redirectUrl: string; // où rediriger l'utiliteur après authentification

  login(name: string, password: string) : Observable<boolean> {
    // Faites votre appel à un service d'authentification
    let isLoggedIn = (name === 'admin' && password === 'admin');

    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
