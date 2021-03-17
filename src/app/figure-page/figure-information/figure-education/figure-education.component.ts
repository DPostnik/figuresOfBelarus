import { Component, OnInit } from '@angular/core';
import {RequestProviderService} from '../../../shared/services/request-provider.service';
import {ActivatedRoute} from '@angular/router';
import {Education, Information} from '../../../shared/interfaces';

@Component({
  selector: 'app-figure-education',
  templateUrl: './figure-education.component.html',
  styleUrls: ['./figure-education.component.scss']
})
export class FigureEducationComponent implements OnInit {

  education: Education;
  id: string;
  constructor(private req: RequestProviderService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => this.id = event.id);
    this.req.getEducation(this.id.substr(1))
      .subscribe(
        resp => {
          console.log(resp);
          this.education = resp;
        }
      );
  }


}
