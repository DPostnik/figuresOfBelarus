import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {InfoService} from '../../shared/services/info.service';
import {switchMap} from 'rxjs/operators';
import {Information} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-figure-page',
  templateUrl: './edit-figure-page.component.html',
  styleUrls: ['./edit-figure-page.component.scss']
})
export class EditFigurePageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  info: Information;
  submitted: boolean;

  constructor(
    private route: ActivatedRoute,
    private infoService: InfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(
      (params: Params) =>
      {
        return this.infoService.getInfoById(params['id']);
      }
    )).subscribe(
      (info: Information) =>
      {
        this.info = info;
        this.form = new FormGroup(
          {
            firstName: new FormControl(info.firstName, [
              Validators.required
            ]),
            lastName: new FormControl(info.lastName, [
              Validators.required
            ]),
            alias: new FormControl(info.alias, ),
            patronymic: new FormControl(info.patronymic, [
              Validators.required
            ]),
            dateBirth: new FormControl(info.dateBirth,
              // [              Validators.required            ]
            ),
            dateDeath: new FormControl(info.dateDeath,
              // [              Validators.required]
            ),
            countryBirth: new FormControl(info.countryBirth, [
              Validators.required
            ]),
            regionBirth: new FormControl(info.regionBirth),
            placeBirth: new FormControl(info.placeBirth),
            countryDeath: new FormControl(info.countryDeath, [
              Validators.required
            ]),
            placeBurial: new FormControl(info.placeBurial),
            achievements: new FormControl(info.achievements),
            attitudeToMarriage: new FormControl(info.attitudeToMarriage),
            awards: new FormControl(info.awards),
            biography: new FormControl(info.biography),
            characteristic: new FormControl(info.characteristic),
            citizenship: new FormControl(info.citizenship),
            confession: new FormControl(info.confession),
            education: new FormControl(info.education),
            ethnos: new FormControl(info.ethnos),
            faith: new FormControl(info.faith),
            friendsAndEnemies: new FormControl(info.friendsAndEnemies),
            linksToWebsite: new FormControl(info.linksToWebsite),
            memberShip: new FormControl(info.memberShip),
            occupation: new FormControl(info.occupation),
            nationality: new FormControl(info.nationality),
            profession: new FormControl(info.profession, [
              Validators.required
            ]),
            politic: new FormControl(info.politic),
          }
        )
      }
    )
  }

  submit() {
    if(this.form.invalid)
    {
      return
    }

    this.submitted = true;
    this.infoService.putInfo(
      {
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
        id: this.info.id
      }
    ).subscribe(
      (resp) =>
      {
        console.log(resp);
        this.submitted = false;
        this.form.reset();
        this.router.navigate(['/admin/dashboard']);
      }
    )}

  ngOnDestroy(): void {
  }
}
