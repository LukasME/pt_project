import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-html-content',
  templateUrl: './html-content.component.html',
  styleUrls: ['./html-content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HtmlContentComponent implements OnInit {

  @Input() html: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
