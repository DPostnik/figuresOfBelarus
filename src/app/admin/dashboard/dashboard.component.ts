import {Component, OnDestroy, OnInit} from '@angular/core';
import {Information} from '../../shared/interfaces';
import {InfoService} from '../../shared/services/info.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  searchStr ='';
  infos: Information[] =[];
  pSub: Subscription;
  dSub: Subscription;


  constructor(
    private infoService: InfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pSub = this.infoService.getAllInfo()
      .subscribe(
        infos =>
        {
          this.infos = infos;
        }
      )
  }


  remove(id: number) {
    this.dSub = this.infoService.deleteInfo(id).subscribe(
      () =>
      {
        this.infos = this.infos.filter(info => info.id !== id);
      }
    )
  }

  ngOnDestroy(): void {
    if(this.pSub) this.pSub.unsubscribe();

    if(this.dSub) this.dSub.unsubscribe();

  }


}
