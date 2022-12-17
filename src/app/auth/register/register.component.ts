import { Component } from '@angular/core';
import { FormBuilder, Form, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchPasswordValidator } from 'src/app/validators/match-passwords-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [matchPasswordValidator('password', 'rePassword')]
    })

  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  registerHandler(){
    if (this.form.invalid){
      return;
    }
    console.log(this.form.value)
    const{ username, email, pass: { password, rePassword} = {}} = this.form.value
    this.authService.register(username!, email!, password!, rePassword!)
   // .subscribe(res => console.log(res))
     .subscribe(user => {
      this.router.navigate(['']);
    })
  }

}
