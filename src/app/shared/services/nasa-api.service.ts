import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const API_KEY = 'DEMO_KEY';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod> {
    //return this.httpClient.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
    //Template Literals
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }

  getMarsImages(camera): Observable<any> {
    return this.httpClient.get(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`);
  }
}
