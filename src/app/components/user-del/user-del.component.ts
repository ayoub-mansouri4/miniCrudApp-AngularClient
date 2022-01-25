import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-del',
  templateUrl: './user-del.component.html',
  styleUrls: ['./user-del.component.css']
})
export class UserDelComponent implements OnInit {
  private id!:number;

  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.deleteUser(this.id);
  }

  public deleteUser(id:number):void{
    this.userService.deleteUser(id).subscribe(
       (resp:void)=>{
         this.router.navigate(["/users"])
       }
      ,(error:HttpErrorResponse)=>{
        alert(error)
      }
    );

  }

}
