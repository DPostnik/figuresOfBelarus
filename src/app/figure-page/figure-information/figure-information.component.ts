import {Component, Input, OnInit} from '@angular/core';
import {FigureInformation} from '../figure-interfaces';

@Component({
  selector: 'app-figure-information',
  templateUrl: './figure-information.component.html',
  styleUrls: ['./figure-information.component.scss']
})
export class FigureInformationComponent implements OnInit {

  @Input() figureInfo: FigureInformation;
  isBiography = false;
  constructor() { }

  ngOnInit(): void {
  }

}
