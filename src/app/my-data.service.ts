import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) { }

  getMovie(title: string, year: number, plot: string){
    return this.http.get<any>(`http://www.omdbapi.com/?t=${title}&y=${year}&plot=${plot}&apikey=989f32ed`);
  }
  // getMovie(){
  //   return this.http.get<any>(`http://www.omdbapi.com/?t=Scooby-doo&y=2002&plot=full&apikey=989f32ed`);
  // }
}
