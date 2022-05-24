import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PAGES} from "../app.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectPage = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  showPage(page: string) {
    this.selectPage.emit(page);
  }
}
