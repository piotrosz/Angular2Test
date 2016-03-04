import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './services/hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'heroes',
    templateUrl: 'app/templates/heroes.component.html',
    styleUrls: ["app/content/css/heroes.component.css"],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    
    constructor(
        private _heroService: HeroService,
        private _router: Router) {
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
            .subscribe(
                heroes => this.heroes = heroes.slice(1, 5)
            );
    }
    
    public heroes: Hero[];
    
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}