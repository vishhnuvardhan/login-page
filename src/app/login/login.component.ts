import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['assets/vendor/simplebar.css',
  'assets/vendor/material-design-kit.css',
  'assets/vendor/sidebar-collapse.min.css',
  'assets/css/style.css',
  './login.component.css',]
})
export class LoginComponent implements OnInit {

  user:User =new User("","");
  data:any;
  message:any;
  constructor(private loginservice:UserLoginService,private router:Router) { }

  ngOnInit() {
  }
loginUser() {
 
    this.loginservice.login(this.user).subscribe(data =>{
      if(data.status=="OK" && data.payload=="Valid User")
      {
        this.router.navigateByUrl('home')
      }
      this.message=data.payload;
   }
  );
}


}
