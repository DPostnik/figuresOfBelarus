import { Component, OnInit } from '@angular/core';
import {RequestProviderService} from '../../../shared/services/request-provider.service';
import {ActivatedRoute} from '@angular/router';
import {Chronology} from '../../../shared/interfaces';

@Component({
  selector: 'app-figure-chronology',
  templateUrl: './figure-chronology.component.html',
  styleUrls: ['./figure-chronology.component.scss']
})
export class FigureChronologyComponent implements OnInit {

  chronologies: Chronology[];
  id: string;
  constructor(private req: RequestProviderService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => this.id = event.id);
    this.req.getChronology(this.id.substr(1))
      .subscribe(
        resp => {
          console.log(resp);
          this.chronologies = resp;
        }
      );
  }

}
