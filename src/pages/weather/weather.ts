import { Component } from '@angular/core';
import { WeatherService } from '../../app/services/weather.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

    zmw: any;
    weather: any;
    searchStr: string;
    results:any;

  constructor(public navCtrl: NavController,
    private weatherService: WeatherService) {



  }

  ngOnInit(){
      this.getDefaultLocation();
      this.weatherService.getWeather(this.zmw)
        .subscribe(weather => {
           this.weather = weather.current_observation;
        })

  }

  getDefaultLocation(){
    this.zmw = '';
  }

  getQuery(searchStr){
      this.weatherService.searchCities(this.searchStr)
        .subscribe(res => {
            this.results = res.RESULTS;
        })
  }

  chooseLocation(location){
    this.results = [];
     this.weatherService.getWeather(location.zmw)
        .subscribe(weather => {
           this.weather = weather.current_observation;
        })
  }

}
