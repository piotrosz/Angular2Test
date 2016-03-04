import {Component} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './services/hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/heroes.html',
    styleUrls: ["app/content/css/hero.css"],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    
    constructor(private _heroService: HeroService) {
    }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    public title = 'Tour of Heroes';
    public selectedHero: Hero = {
      id: 1,
      name: 'Windstorm'  
    };
    
    getHeroes() {
        this._heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    
    public heroes: Hero[];
    
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}