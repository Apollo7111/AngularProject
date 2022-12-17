import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.scss']
})
export class CreateThemeComponent {

  constructor(private themeService: ThemeService, private router: Router){}

  createThemeHandler(form: NgForm): void{
    if(form.invalid){
      return;
    }
    const {postName, postText} = form.value;

    this.themeService.createTheme(postName, postText)
    .subscribe(() => {
      this.router.navigate(['']);
    })
  }

}
