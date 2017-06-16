import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  // template: 'mainTemplate.html'
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

  providers: []
})




export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService,
    private router: Router) { }

  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }




  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('Hero selected');
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
      console.log('Promise fufilled');
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }


}




