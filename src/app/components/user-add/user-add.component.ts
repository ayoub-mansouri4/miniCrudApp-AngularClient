import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  private user!:User;

  constructor(private userService:UserService ,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  public onAddUser(addForm:NgForm):void{
    this.userService.addUser(addForm.value).subscribe(
      (resp:User)=>{
        this.user=resp;
        this.router.navigate(['/users'])
      },
      (error:HttpErrorResponse)=>{
        alert(error)
      }
    );
  }

}
