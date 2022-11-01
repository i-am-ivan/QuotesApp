import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewquotePage } from './newquote.page';

const routes: Routes = [
  {
    path: '',
    component: NewquotePage
  },
  {
    path: 'editQuote',
    loadChildren: () => import('../editquote/editquote.module').then(mod => mod.EditquotePageModule)
  },
  {
    path: 'returnhome',
    loadChildren: () => import('../home/home.module').then(mod => mod.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewquotePageRoutingModule {}
