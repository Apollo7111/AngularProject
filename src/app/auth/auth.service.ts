import { Injectable } from '@angular/core';
import { IUser } from '../inerfaces/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isLoggedIn(){
    return this.user !== null;
  }

  constructor() { }
}
