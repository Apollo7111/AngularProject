import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environment/environment'
import { ITheme } from './inerfaces/theme';
const apiUrl = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient: HttpClient) { }
  
  loadThemes() {
    return this.HttpClient.get<ITheme[]>(`${apiUrl}/themes`);
  }

}
