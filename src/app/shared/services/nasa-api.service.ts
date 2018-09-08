import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private readonly DATA: Apod = {
    date: '2017-11-08',
    explanation: 'asd',
    hdurl: 'https://proyectopuente.com.mx/wp-content/uploads/2016/08/nasa.jpg',
    media_type: 'rfv',
    service_version: 'dd',
    title: 'Titulo',
    url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/10/15/09/NASA-5.jpg'
  }

  constructor() { }

  getApod(): Apod {
    return this.DATA;
  }
}
