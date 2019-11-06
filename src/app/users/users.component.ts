import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'app-users',
 templateUrl: './users.component.html',
 styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users=[
   {
   id:1,
   name:"Francisco",
   surname:"Chik"
 },
 {
   id:2,
   name:"William",
   surname:"Grount"
 },
 {
   id:3,
   name:"Carolina",
   surname:"Dornan"
 },
 {
   id:4,
   name:"Henry",
   surname:"Ford"
 }
 ]
 constructor() { }
 ngOnInit() {
 }
}