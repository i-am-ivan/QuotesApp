import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.page.html',
  styleUrls: ['./newquote.page.scss'],
})
export class NewquotePage {

  constructor(private router: Router) { }

  editquote() { return this.router.navigateByUrl('/editquote'); }

  quoteDetail() { return this.router.navigateByUrl('/quotedetail'); }

}
