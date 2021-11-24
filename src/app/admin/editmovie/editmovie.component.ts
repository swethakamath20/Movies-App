import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {
  movie: any = [];
  constructor(public service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieByMovieId();
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form);
    this.router.navigateByUrl('/Admin');
  }

  getMovieByMovieId() {
    this.service.getMovieByMovieId().subscribe((response) => {
      this.movie = []
      this.movie.push(response)
    });
    console.log(this.movie);
  }

  updateRecord(form: NgForm) {
    this.service.putMovie(form.value).subscribe(res => {
      console.log(res);
      /*      this.resetForm(form);*/
      /*      this.service.refreshList();*/
    });
  }

}
