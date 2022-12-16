import { Component } from '@angular/core';
import { FormBuilder, Form, Validators } from '@angular/forms';
import { matchPasswordValidator } from 'src/app/validators/match-passwords-validator';

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

  constructor(private fb: FormBuilder) {

  }

  registerHandler(){
    console.log(this.form.value)
  }

}
