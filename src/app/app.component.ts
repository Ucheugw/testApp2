import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-app',
  // template: 'mainTemplate.html'
  templateUrl: 'app/mainTemplate.html',
  styleUrls: ['app/styles.css'],

  providers: [HeroService]
})




export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

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
}




