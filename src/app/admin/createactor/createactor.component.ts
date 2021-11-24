import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-createactor',
  templateUrl: './createactor.component.html',
  styleUrls: ['./createactor.component.css']
})
export class CreateactorComponent implements OnInit {

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
    this.router.navigateByUrl('/Admin');
  }

  insertRecord(form: NgForm) {
    console.log(form);
    this.service.postActor(form.value).subscribe(res => {
      console.log(res);
/*      this.resetForm(form);*/
/*      this.service.refreshList();*/
    });
  }
}
