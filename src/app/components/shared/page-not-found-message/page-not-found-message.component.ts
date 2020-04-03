import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-not-found-message',
  templateUrl: './page-not-found-message.component.html',
  styleUrls: ['./page-not-found-message.component.scss']
})
export class PageNotFoundMessageComponent implements OnInit {

  @Input() displayVal: string;

  constructor() { }

  ngOnInit() {
  }

}
