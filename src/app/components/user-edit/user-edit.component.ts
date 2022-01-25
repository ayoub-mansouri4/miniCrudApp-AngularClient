import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
   public user:User=new User;
   public newUser!:User;
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user.id=this.route.snapshot.params["id"];
  }

  public onEditUser(){
    this.userService.updateUser(this.user).subscribe(
      (resp:User)=>{
        this.newUser=resp;
        this.router.navigate(['/users'])
      },
      (error:HttpErrorResponse)=>{
        alert(error)
      }
    );
         
  }

}
