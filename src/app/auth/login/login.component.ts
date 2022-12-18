import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild(NgForm,
    { static: true }) 
    form!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {
   

  }

  loginHandler(form: NgForm): void{
    if(form.invalid){
      return;
    }
   // const {email, password} = form.value;
    //  this.authService.user = {
    //   username: "John",
    //   password: "12345",
    //   email: "john@abv.bg",
    //   posts: [],
    //   themes: [],
    //   _id: "1",
    //   additionalInfo: "private authService: AuthServiceprivate authService: AuthServiceprivate authService: AuthService",
    //   __v: 0
    // };
    const{ email, password} = form.value;
    this.authService.login(email!, password!)
   // .subscribe(res => console.log(res))
    .subscribe(user => {
      console.log(user)
      this.router.navigate(['']);
    }) 

      const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

      this.router.navigate([returnUrl])
      
    }
  }
