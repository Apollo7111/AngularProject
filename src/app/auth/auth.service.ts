import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';
import { IUser } from '../inerfaces/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | null => val !== undefined));

   user: IUser | null = null

  get isLoggedIn(){
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) { 
   this.subscription = this.user$
   .subscribe(user => {
      this.user = user;
    })
  }
 

  register(username: string, email: string, password: string, rePassword: string){
    return this.http.post<IUser>('/api/register', {username, email, password, rePassword})
    .pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string){
    return this.http.post<any>('/api/login', {email, password})
    .pipe(tap(user => this.user$$.next(user)));
  }

  logout(){
    return this.http.post<void>('/api/logout', {})
    .pipe(tap(user => this.user$$.next(null)));
  }

  getProfile(){
    return this.http.get<IUser>('/api/users/profile')
    .pipe(tap(user => this.user$$.next(user)),
    catchError((err) =>{
      this.user$$.next(null);
      return of(err);
    })
    );
  }
  loadUser(userId: string){
    return this.http.get<IUser>(`/api/users/` + userId);
  }
  

  setProfile(additionalInfo: string){
    return this.http.put<IUser>('/api/users/profile', {additionalInfo})
    .pipe(tap(user => this.user$$.next(user)));
  }

 ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
