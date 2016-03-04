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
    errorMessage: any;
    
    constructor(
        private _heroService: HeroService,
        private _router: Router) {
    }
    
    ngOnInit() {
        console.log('Dashboard init');
        this._heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes.slice(1, 5),
                error => this.errorMessage = error
            );
    }
    
    gotoDetail(hero: Hero) {
       let link = ['HeroDetail', { id: hero.id }];
       this._router.navigate(link);
    }
}