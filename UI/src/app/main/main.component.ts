import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as io from "socket.io-client";
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({ 
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  socket = io('http://localhost:8000');
  constructor(private http:Http) { }
  rows=[];
  row=[];
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
      //window.alert(this.rows[0].datetime);
      
    }); 
  }  

 
  ins=function(){
    const body={username:this.username};
    this.http.post('http://localhost:8000/add/addhi',body).subscribe();
  }

}
 