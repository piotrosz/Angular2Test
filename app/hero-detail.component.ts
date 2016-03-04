import {Component} from 'angular2/core';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/templates/hero-detail.html',
    inputs: ['hero']
})
export class HeroDetailComponent {
    constructor(){
        console.log('Hero detail component');
    }
    
    hero: Hero
}