import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.page.html',
  styleUrls: ['./newquote.page.scss'],
})
export class NewquotePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { return this.router.navigateByUrl('/'); }

}
