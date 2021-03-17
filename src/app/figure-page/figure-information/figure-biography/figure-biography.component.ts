import { Component, OnInit } from '@angular/core';
import {Information} from '../../../shared/interfaces';
import {RequestProviderService} from '../../../shared/services/request-provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-figure-biography',
  templateUrl: './figure-biography.component.html',
  styleUrls: ['./figure-biography.component.scss']
})
export class FigureBiographyComponent implements OnInit {

  figureInfo: Information;
  id: string;

  constructor(private req: RequestProviderService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(event =>
    {
      console.log(event.id);
      this.id = event.id});
    this.req.getInformation(this.id.substr(1))
      .subscribe(
        resp => {
          this.figureInfo = resp;
        }
      );
  }

}
