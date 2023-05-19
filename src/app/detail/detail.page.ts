import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  audio: any;
  d_detail : any;
  constructor(
    private actr : ActivatedRoute,
    private rtr : Router,
  ) { 
      if(this.rtr.getCurrentNavigation()){
        this.d_detail = this.rtr.getCurrentNavigation().extras.state.nama;
      }
      
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = this.d_detail.files;
    this.audio.load();
  }
  playAudio() { 
    this.audio.play();
      this.audio.loop = true;
   }
   
     stopAudio() {
       this.audio.pause(); 
     }
   
     ngOnDestroy() {
       if(this.audio) {
         this.audio.pause();
         this.audio = null;
       }
      }
  
}
