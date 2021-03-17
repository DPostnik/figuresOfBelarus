import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-figure-page',
  templateUrl: './figure-page.component.html',
  styleUrls: ['./figure-page.component.scss']
})
export class FigurePageComponent implements OnInit {
  private id: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params =>
    {
      this.id = params.id;
      console.log("id: figure-page: "+ this.id)
    });
  }

}
