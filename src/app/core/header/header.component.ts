import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0.2
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out'))
    ])
  ]
})
export class HeaderComponent {

  get isLogged(){
    return this.authService.isLoggedIn;
  }

  get user() {
    return this.authService.user;
  }

  show = false;

  constructor(private router: Router, private authService: AuthService){}

  // Angular Animations

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }


}
