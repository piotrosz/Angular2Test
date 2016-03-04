import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroService} from './services/hero.service'

@Component({
    selector: 'dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: ['app/content/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    heroes: Hero[] = [];
    
    constructor(
        private _heroService: HeroService,
        private _router: Router) {
    }
    
    ngOnInit() {
        console.log('Dashboard init');
        this._heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes.slice(1, 5);
            });
    }
    
    gotoDetail(hero: Hero) {
       let link = ['HeroDetail', { id: hero.id }];
       this._router.navigate(link);
    }
}