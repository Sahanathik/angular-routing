import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing-demo';
  islogin : any = "false"

  ngOnInit(){
    this.islogin = localStorage.getItem('login')
  }
}
