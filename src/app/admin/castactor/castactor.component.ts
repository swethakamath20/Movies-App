import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-castactor',
  templateUrl: './castactor.component.html',
  styleUrls: ['./castactor.component.css']
})


export class CastactorComponent implements OnInit {

  moviesList: any = [];
  actorsList: any = [];
  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.getAllPeople();
  }

  getAllPeople() {
    this.service.getAllPeople().subscribe((response) => {
      //this.moviesList = []
      this.actorsList.push(response)
    });
    console.log(this.actorsList);
  }

  getAllMovies() {
    this.service.getAllMovies().subscribe((response) => {
      //this.moviesList = []
      this.moviesList.push(response)
    });
    console.log(this.moviesList);
  }

  movieSelect(MovieId: number) {
    this.service.movieSelected = MovieId;
    console.log(this.service.movieSelected);
    console.log(this.service.actorSelected);
  }
  actorSelect(PersonId: string) {
    this.service.actorSelected = PersonId;
    console.log(this.service.movieSelected);
    console.log(this.service.actorSelected);
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
    this.router.navigateByUrl('/Admin');
  }

  insertRecord(form: NgForm) {
    console.log(form);
    this.service.postMoviesActor(form.value).subscribe(res => {
      console.log(res);
      /*      this.resetForm(form);*/
      /*      this.service.refreshList();*/
    });
  }

  disabledButton= (): boolean => {
    if ( this.service.movieSelected != undefined && this.service.actorSelected != undefined) 
    {
      return true
    }
    else
    {
      return false
    }
  }

}
