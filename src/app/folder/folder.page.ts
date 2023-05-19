import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  data : any;
  
  constructor(private activatedRoute: ActivatedRoute,
    private http : HttpClient,
    private rtr : Router,
    private network: Network
    ) {    
      if(this.network.onDisconnect()){
        fetch("../../assets/data/sholawat.json").then(res => res.json()).then(json => {
          this.data = json;
        });
      }else if(this.network.onConnect()){
        this.http.get('https://api-sholawat.000webhostapp.com/index.php?api=getdata').subscribe((val : any)=>{
      this.data = val;
        });
      }   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  detail(name: any){
    let navExtras : NavigationExtras ={
      state : {
        nama : name,
      }
    };
    this.rtr.navigate(['detail'],navExtras);
  }

}
