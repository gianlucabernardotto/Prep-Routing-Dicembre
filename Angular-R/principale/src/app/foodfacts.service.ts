import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://world.openfoodfacts.org/search?q=${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'API https://documenter.getpostman.com/view/8470508/SVtN3Wzy'
    });

    let obsFood = this.http.get(url, { headers });
    return obsFood;

  }
}
