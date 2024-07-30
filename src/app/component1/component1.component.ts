import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { take } from 'rxjs';


export interface IMovie {
  Title: string,
  Year: number,
  Rated: string,
  Runtime: string,
  Director: string,
  Actors: string,
  Plot: string,
  imdbRating: string
}

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  public movie: IMovie | undefined;
  public error: string = '';

  public title: string = '';
  public year: string = '';
  public plot: string = '';

  public yearNum: any;

  public visibility: boolean = false;

  constructor(private myDataService: MyDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.title = params.get('title') || '';
      this.year = params.get('year') || '';
      this.plot = params.get('plot') || '';
      this.yearNum = Number(this.year);

      this.myDataService
        .getMovie(this.title, this.yearNum, this.plot).pipe(take(1))
        .subscribe((data) => {
          this.movie = data;
        },
          (error) => {
            this.error = error.message;
            console.log(error);
          });
    })
  }  

}
