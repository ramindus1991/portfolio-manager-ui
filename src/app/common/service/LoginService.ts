import { Inject, Injectable, Optional }                      from '@angular/core';
import { Customer } from '../model/customer';
import { User } from '../model/user';

@Injectable({providedIn: 'root'})
export class LoginService{
  user?: User;
  constructor() { }
}