import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getData() {
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=apple&apiKey=8042e64d01474543aaa7df7644872b0a`)
  }
}

// https://newsapi.org/v2/everything?q=apple&from=2022-06-24&to=2022-06-24&sortBy=popularity&apiKey=API_KEY