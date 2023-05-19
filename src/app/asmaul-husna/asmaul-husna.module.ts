import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsmaulHusnaPageRoutingModule } from './asmaul-husna-routing.module';

import { AsmaulHusnaPage } from './asmaul-husna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsmaulHusnaPageRoutingModule
  ],
  declarations: [AsmaulHusnaPage]
})
export class AsmaulHusnaPageModule {}
