import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditquotePageRoutingModule } from './editquote-routing.module';

import { EditquotePage } from './editquote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditquotePageRoutingModule
  ],
  declarations: [EditquotePage]
})
export class EditquotePageModule {}
