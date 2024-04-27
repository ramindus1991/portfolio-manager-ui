import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { Button } from 'primeng/button';
import { LoginService } from '../common/service/LoginService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    
    submitted = false;
    constructor(
      private http: HttpClient,
      private loginService: LoginService,
      private router: Router
    ) { }
    
    ngOnInit() {
        this.loginForm = new FormGroup({
            'login': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        });
    }
    
    onSubmit() { 
        this.submitted = true;

        this.http.get<any>('http://localhost:3000/login').subscribe(data => {
          this.loginService.user = {accessToken: data.accessToken, customerName: data.customerName};
          this.router.navigate(['summary']);
        })
    }
}