import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap'; /**The switchMap operator maps the id in the Observable route parameters to a new Observable, the result of the HeroService.getHero() method.
If a user re-navigates to this component while a getHero request is still processing, switchMap cancels the old request and then calls HeroService.getHero() again. */

import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail-template.html',
    styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {
    }
    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}