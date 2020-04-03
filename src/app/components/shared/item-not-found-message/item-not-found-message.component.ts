import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-not-found-message',
  templateUrl: './item-not-found-message.component.html',
  styleUrls: ['./item-not-found-message.component.scss']
})
export class ItemNotFoundMessageComponent implements OnInit {

  @Input() displayVal: string;

  constructor() { }

  ngOnInit() {
  }

}
