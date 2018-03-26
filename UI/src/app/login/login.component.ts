import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http } from '@angular/http';
import * as io from "socket.io-client";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  socket = io('http://localhost:8000');
  email=""
  password=""
  error=""
  rows=[]; 
  a=0;
  constructor(private http:Http, private router:Router) { }
  
  ngOnInit() {
    this.socket.on('address', function (data) {
    console.log(data);
    this.load();
  }.bind(this)); 
  this.load(); 
    
}
  load=function(){
    this.http.get('http://localhost:8000/load1').subscribe(data => {
      // Read the result field from the JSON response.
      this.rows=JSON.parse(data["_body"]);
     // window.alert(this.rows[0].email);
    }); 
  }  
  login=function(){
    for(let i = 0; i < this.rows.length;i++)
    if(this.email==this.rows[i].email&&this.password==this.rows[i].password){
        this.router.navigate(['main']);
        this.a=1;

    }else{
        this.error="Invalid Credentials"
    }
    if(this.a==0)
      window.alert(this.error);

  }
}
