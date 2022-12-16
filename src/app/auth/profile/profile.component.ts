import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/inerfaces/theme';
import { AuthService } from 'src/app/auth/auth.service';
import {FormGroup, Form, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-profile', //in main
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit{
  
  themeList: ITheme[] | null = null;

  showEditMode = false;
  formSubmitted = false;

  counter = 1;


  get user2() {
    return this.authService.user;
  }

  get user() {
    const { additionalInfo} = this.authService.user!;
    return {
      additionalInfo,
    };
  }

  form = this.fb.group({
    additionalInfo: [''],
  })

  constructor(private apiService: ApiService, private authService: AuthService, private fb: FormBuilder){
    this.form.setValue(this.user);
  }
  ngOnInit(): void{
    this.apiService.loadThemes().subscribe({
     next: (value) => {
      this.themeList = value;
     },
     error: (err) => {
      console.error(err)
     }
    }
    )
  }

  toggleEditMode(): void{
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
    }
  }

  saveProfile(): void{
    console.log(this.form.value)
    this.formSubmitted = true;
    const { additionalInfo } = this.form.value;
    this.authService.user!.additionalInfo = additionalInfo as string;
    this.toggleEditMode();
  }
}

