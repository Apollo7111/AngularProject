import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environment/environment'
import { ITheme } from './inerfaces/theme';
import { IPost } from './inerfaces/post';
const apiUrl = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient: HttpClient) { }
  
  loadThemes() {
    return this.HttpClient.get<ITheme[]>(`${apiUrl}/themes`);
  }
  loadPosts() {
    return this.HttpClient.get<IPost[]>(`${apiUrl}/posts`);
  }

}
