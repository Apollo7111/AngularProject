import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.scss']
})
export class CreateThemeComponent {

  constructor(){}

  createThemeHandler(form: NgForm): void{
    if(form.invalid){
      return;
    }
    console.log(form.value)
  }

}
