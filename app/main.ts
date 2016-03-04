import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from 'angular2/http'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [HTTP_PROVIDERS]);