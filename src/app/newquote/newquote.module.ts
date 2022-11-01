import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewquotePageRoutingModule } from './newquote-routing.module';

import { NewquotePage } from './newquote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewquotePageRoutingModule
  ],
  declarations: [NewquotePage]
})
export class NewquotePageModule {}
