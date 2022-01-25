import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users!:User[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  public getUsers():void{
         this.userService.getAllusers().subscribe(
           (respense:User[])=>{
             this.users=respense;
           },
           (error:HttpErrorResponse)=>{
             alert(error)
           }
         );
  }
}
