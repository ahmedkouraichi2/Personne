import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 user:User={}
  constructor(private authService:AuthService,private router :Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['personne'])
  }

}
