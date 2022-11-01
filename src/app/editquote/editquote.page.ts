import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editquote',
  templateUrl: './editquote.page.html',
  styleUrls: ['./editquote.page.scss'],
})
export class EditquotePage {

  constructor(private router: Router) { }

  returnhome() { return this.router.navigateByUrl('/returnhome'); }

}
