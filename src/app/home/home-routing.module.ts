import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'newquote',
    loadChildren: () => import('../newquote/newquote.module').then(mod => mod.NewquotePageModule)
  },
  {
    path: 'editquote',
    loadChildren: () => import('../editquote/editquote.module').then(mod => mod.EditquotePageModule)
  },
  {
    path: 'quotedetail',
    loadChildren: () => import('../quotedetail/quotedetail.module').then(mod => mod.QuotedetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
