import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-sub-header',
  templateUrl: './page-sub-header.component.html',
  styleUrls: ['./page-sub-header.component.scss']
})
export class PageSubHeaderComponent implements OnInit {

  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
