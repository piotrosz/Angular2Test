import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
//import {HEROES} from '../mock-heroes';

@Injectable()
export class HeroService {
    
    constructor(private _http: Http) {
    }
    
    getHeroes() {
        return this._http
            .get('/app/heroes.json')
            .map(result => <Hero[]> result.json())
            .do(data => console.log("Data is: " + data))
            .catch(this.handleError);
        //return Promise.resolve(HEROES);
    }
    
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    //getHeroesSlowly() {
    //    return new Promise<Hero[]>(resolve =>
    //        setTimeout(() => resolve(HEROES), 2000) 
    //    );
    //}
    
    getHero(id: number) {
       //return Promise.resolve(HEROES).then(
       //heroes => heroes.filter(hero => hero.id === id)[0]);
    //    
       return this._http
            .get('/app/heroes.json')
            .map(result => <Hero[]> result.json())
            .do(data => console.log("Data is: " + data));
            
    }
}