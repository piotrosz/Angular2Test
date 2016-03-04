import {Component, OnInit} from 'angular2/core';
import {HeroService} from './services/hero.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/templates/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    
    heroes: Hero[] = [];
    
    constructor(private _heroService: HeroService) {
        
    }
    
    ngOnInit() {
        console.log('Dashboard init');
        this._heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes.slice(1, 5);
            });
    }
    
    gotoDetail() {
        /* not implemented yet */
    }
}