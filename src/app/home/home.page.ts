import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NewquotePage } from '../newquote/newquote.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  editquote() { return this.router.navigateByUrl('/editquote'); }

  newQuote() { return this.router.navigateByUrl('/newquote'); }

  quoteDetail() { return this.router.navigateByUrl('/quotedetail'); }

}
