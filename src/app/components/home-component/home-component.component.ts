import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['a Sysadmin.', 'a Dev.', 'a Devops.', 'a Coffee Lover.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };

    const typed = new Typed('.typed-element', options);
  }

}
