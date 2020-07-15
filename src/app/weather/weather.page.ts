import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss']
})

export class WeatherPage {
  data: string;

  constructor(private http: HttpClient) {
    this.data = '';
  }
	
	
	
	private prepareDataRequest(): Observable<object> {
  // Define the data URL
  const dataUrl = 'http://api.openweathermap.org/data/2.5/weather?q=iowa%20city&appid=fb752b871b555c976809c474358f6bd9';
  // Prepare the request
  return this.http.get(dataUrl);
}
	ionViewWillEnter() {
  // Load the data
  this.prepareDataRequest()
    .subscribe(
      data => {
        // Set the data to display in the template
        this.data = JSON.stringify(data);
      }
    );
}
	
}







