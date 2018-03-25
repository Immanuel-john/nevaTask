import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as io from "socket.io-client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  socket = io('http://localhost:8000');
  constructor(private http:Http) { }
  rows=[];
  ngOnInit() {
    this.socket.on('address', function (data) {
    console.log(data);
    this.load();
  }.bind(this)); 
  this.load();
    
}
  load=function(){
    this.http.get('http://localhost:8000/load').subscribe(data => {
      // Read the result field from the JSON response.
      this.rows=JSON.parse(data["_body"]);
    });
  }  


  insert=function(){
    if(this.password==this.cpassword){
    const body={email:this.email,password:this.password};
    this.http.post('http://localhost:8000/add',body).subscribe();
    window.alert('Successfully registered. Now Login');
    
  }
    else{
      window.alert('Password and confirm password should be equal. Try again!');
    }
  }

}
