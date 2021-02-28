import { Component, OnInit, ViewChild } from '@angular/core';
import { NbRevealCardComponent } from '@nebular/theme';

@Component({
  selector: 'app-resume-component',
  templateUrl: './resume-component.component.html',
  styleUrls: ['./resume-component.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor() {}
  @ViewChild('revealByg')
  RevealBygComponent!: NbRevealCardComponent;

  @ViewChild('revealYes')
  RevealYesComponent!: NbRevealCardComponent;

  @ViewChild('revealEnfa')
  RevealEnfaComponent!: NbRevealCardComponent;

  @ViewChild('revealLdnr')
  RevealLdnrComponent!: NbRevealCardComponent;

  ngOnInit(): void {}

  toggleByg(): void {
    this.RevealBygComponent.toggle();
  }

  toggleYes(): void {
    this.RevealYesComponent.toggle();
  }

  toggleEnfa(): void {
    this.RevealEnfaComponent.toggle();
  }

  toggleLdnr(): void {
    this.RevealLdnrComponent.toggle();
  }
}
