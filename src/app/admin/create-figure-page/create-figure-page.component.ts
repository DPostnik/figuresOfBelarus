import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Information} from '../../shared/interfaces';
import {Router} from '@angular/router';
import {RequestProviderService} from '../../shared/services/request-provider.service';
import {InfoService} from '../../shared/services/info.service';

@Component({
  selector: 'app-create-figure-page',
  templateUrl: './create-figure-page.component.html',
  styleUrls: ['./create-figure-page.component.scss']
})
export class CreateFigurePageComponent implements OnInit {

  form: FormGroup;

  constructor(private req: InfoService,
              private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.required
      ]),
      alias: new FormControl(null),
      patronymic: new FormControl(null, [
        Validators.required
      ]),
      dateBirth: new FormControl(null,
        // [Validators.required      ]
      ),
      dateDeath: new FormControl(null
        // , [Validators.required]
      ),
      countryBirth: new FormControl(null,
        // [  Validators.required      ]
      ),
      regionBirth: new FormControl(null),
      placeBirth: new FormControl(null),
      countryDeath: new FormControl(null,
        // [        Validators.required]
      ),
      placeBurial: new FormControl(null),
      achievements: new FormControl(null),
      attitudeToMarriage: new FormControl(null),
      awards: new FormControl(null),
      biography: new FormControl(null),
      characteristic: new FormControl(null),
      citizenship: new FormControl(null),
      confession: new FormControl(null),
      education: new FormControl(null),
      ethnos: new FormControl(null),
      faith: new FormControl(null),
      friendsAndEnemies: new FormControl(null),
      linksToWebsite: new FormControl(null),
      memberShip: new FormControl(null),
      occupation: new FormControl(null),
      nationality: new FormControl(null),
      profession: new FormControl(null,
        // [        Validators.required      ]
      ),
      politic: new FormControl(null),
    })
  }

  submit(): void {
    if(this.form.invalid)
    {
      return
    }


        const info: Information = {
      achievements: this.form.value.achievements,
      alias: this.form.value.alias,
      attitudeToMarriage:this.form.value.attitudeToMarriage,
      awards:this.form.value.awards,
      biography:this.form.value.biography,
      characteristic:this.form.value.characteristic,
      citizenship:this.form.value.citizenship,
      confession:this.form.value.confession,
      countryBirth:this.form.value.countryBirth,
      countryDeath:this.form.value.countryDeath,
      dateBirth: this.form.value.dateBirth,
      dateDeath: this.form.value.dateDeath,
      education:this.form.value.education,
      ethnos:this.form.value.ethnos,
      faith:this.form.value.faith,
      firstName:this.form.value.firstName,
      friendsAndEnemies:this.form.value.friendsAndEnemies,
      lastName:this.form.value.lastName,
      linksToWebsite:this.form.value.linksToWebsite,
      memberShip:this.form.value.memberShip,
      nationality:this.form.value.nationality,
      occupation:this.form.value.occupation,
      patronymic:this.form.value.patronymic,
      placeBirth:this.form.value.placeBirth,
      placeBurial:this.form.value.placeBurial,
      politic:this.form.value.politic,
      profession:this.form.value.profession,
      regionBirth:this.form.value.regionBirth,
    };
    //
    console.log('info:'+ info);
    this.req.postInfo(info)
      .subscribe(
        ()=>
        {
          this.form.reset()
          this.router.navigate(['/admin/dashboard']);
        }
      );
  }

}
