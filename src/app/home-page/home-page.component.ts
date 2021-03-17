import {Component, OnInit} from '@angular/core';
import {InfoService} from '../shared/services/info.service';
import {PhotoService} from '../shared/services/photo.service';
import {Card, Information, PhotoArchive} from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cards: Card[] = [];
  photos: PhotoArchive[] = [];
  infos: Information[] = [];

  constructor(
    private infoService: InfoService,
    private photoService: PhotoService,
  ){}

  ngOnInit(): void {
    this.fetchInfos()
  }

  fetchInfos()
  {
    this.infoService.getAllInfo()
      .subscribe(
        (infos) =>
        {
          this.createCards(infos);
        }
      )
  }

  createCards(infos: Information[])
  {
    infos.forEach(
      (info) =>
      {
        const card = {
          fullName: `${info.lastName} ${info.firstName} ${info.patronymic}`,
          profession: `${info.profession}`,
          id: `${info.id}`,
          url:`${info.occupation}`
        };
        this.cards.push(card);
      }
    )
  }




}

