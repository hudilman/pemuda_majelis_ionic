import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-asmaul-husna',
  templateUrl: './asmaul-husna.page.html',
  styleUrls: ['./asmaul-husna.page.scss'],
})
export class AsmaulHusnaPage implements OnInit {
  data: any;
  constructor(private http: HttpClient,
    private rtr: Router, ) {
    fetch("../../assets/data/asmaulHusna.json").then(res => res.json()).then(json => {
      this.data = json;

    });
  }

  ngOnInit() {
  }

}
