import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Output() logout = new EventEmitter();
  @Input() loggedIn: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
