import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent implements OnInit {

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
    this.router.navigateByUrl('/Admin');
  }

  insertRecord(form: NgForm) {
    this.service.postMovie(form.value).subscribe(res => {
      console.log(res);
      /*      this.resetForm(form);*/
      /*      this.service.refreshList();*/
    });
  }
}
