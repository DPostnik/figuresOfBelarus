import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-figure-nav-bar',
  templateUrl: './figure-nav-bar.component.html',
  styleUrls: ['./figure-nav-bar.component.scss']
})
export class FigureNavBarComponent implements OnInit {
  id: string = '1';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}
