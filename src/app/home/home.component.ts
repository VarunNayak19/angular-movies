import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  popularMovies: any;
  theatreMovies: any;
  showPopularMovie = false;
  constructor(private httpClient: HttpClient, private router: Router) {

  }
  ngOnInit() {
    this.getTrendingMovies();
    this.getPopularMovies();
    this.getTheatreMovies();
  }
  getTrendingMovies() {
    this.httpClient.get('http://localhost:4200/assets/data/trending-movies.json').subscribe(
      (movies) => {
        this.trendingMovies = movies;
      }
    )
  }

  getPopularMovies() {
    this.httpClient.get('http://localhost:4200/assets/data/popular-movies.json').subscribe(
      (movies) => {
        this.popularMovies = movies;
      }
    )
  }

  getTheatreMovies() {
    this.httpClient.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe(
      (movies) => {
        this.theatreMovies = movies;
        console.log(this.trendingMovies)
      }
    )
  }

  gotToMovies(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

  showPopularMoviesFn() {
    this.showPopularMovie = !this.showPopularMovie;
    console.log(this.showPopularMovie)
  }
}