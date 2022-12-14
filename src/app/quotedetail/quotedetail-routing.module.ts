import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotedetailPage } from './quotedetail.page';

const routes: Routes = [
  {
    path: '',
    component: QuotedetailPage
  },
  {
    path: 'editQuote',
    loadChildren: () => import('../editquote/editquote.module').then(mod => mod.EditquotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotedetailPageRoutingModule {}
