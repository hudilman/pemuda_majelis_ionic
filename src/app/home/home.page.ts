import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { MomentModule } from 'ngx-moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  ashar: any;
  dzuhur: any;
  maghrib: any;
  isya: any;
  subuh: any;
  constructor(private http: HttpClient,
    private rtr: Router, ) {
    const date = new Date();
    const formatedDate = date.toISOString().substring(0, 10);
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    this.http.get("https://api.banghasan.com/sholat/format/json/jadwal/kota/703/tanggal/" + formatedDate).subscribe((val: any) => {
      this.ashar = val.jadwal.data.ashar;
      this.subuh = val.jadwal.data.subuh;
      this.dzuhur = val.jadwal.data.dzuhur;
      this.isya = val.jadwal.data.isya;
      this.maghrib = val.jadwal.data.maghrib;
    });


  }

  ngOnInit() {
  }

}
