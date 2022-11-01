import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'newquote',
    loadChildren: () => import('./newquote/newquote.module').then( m => m.NewquotePageModule)
  },
  {
    path: 'editquote',
    loadChildren: () => import('./editquote/editquote.module').then( m => m.EditquotePageModule)
  },
  {
    path: 'quotedetail',
    loadChildren: () => import('./quotedetail/quotedetail.module').then( m => m.QuotedetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
