import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaluhiaPageRoutingModule } from './maluhia-routing.module';

import { MaluhiaPage } from './maluhia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaluhiaPageRoutingModule
  ],
  declarations: [MaluhiaPage]
})
export class MaluhiaPageModule {}
