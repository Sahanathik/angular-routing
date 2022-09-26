import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  gotocontact(){
    this.router.navigate(['/contact'])
  }

  logout(){
    localStorage.setItem("login", "false");
    window.location.reload()
  }
}
