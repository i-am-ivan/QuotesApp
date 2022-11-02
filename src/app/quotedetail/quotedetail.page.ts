import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.page.html',
  styleUrls: ['./quotedetail.page.scss'],
})
export class QuotedetailPage {

  constructor(private router: Router) { }

  editquote() { return this.router.navigateByUrl('/editquote'); }

}
