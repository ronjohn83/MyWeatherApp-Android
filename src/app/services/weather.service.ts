import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{

    apiKey: string;
    autoCompleteUrl: string
    conditionsUrl: string;

    constructor(private _http: Http){
        
        this.apiKey = '31a02be3ad308375';
        this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
        this.autoCompleteUrl = 'http://localhost:8100/search/aq?query=';
    }

    getWeather(zmw){

        return this._http.get(this.conditionsUrl+'/'+state+'/'+ city +'/'+'.json')
            .map(res => res.json());
    }

    searchCities(searchStr){

        return this._http.get(this.autoCompleteUrl+searchStr)
            .map(res => res.json());

    }
}