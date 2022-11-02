import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  login: Login = new Login();
  
  constructor(
    private logService: LoginService,
    private route: Router
  ) { }
  

  ngOnInit() {
  }

  salvar() {
    this.logService.salvar(this.login);
    this.route.navigateByUrl('/restaurants');
  }
}
