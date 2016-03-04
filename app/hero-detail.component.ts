import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HeroService} from './services/hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/templates/hero-detail.component.html',
    inputs: ['hero'],
    styleUrls: ['app/content/css/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private _routeParams: RouteParams,
        private _heroService: HeroService
    ) {
        console.log('Hero detail component');
    }
    
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .subscribe(
                hero => this.hero = hero[0]
            );
    }
    
    goBack() {
        window.history.back();
    }
    
    hero: Hero
}