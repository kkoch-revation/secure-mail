import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss']
})

export class WeatherPage {
  data: string;
  error: string;
  loading: any;

  constructor(private http: HttpClient, public loadingController: LoadingController) {
    this.data = '';
	this.error = '';
  }
	
	
private prepareDataRequest(): Observable<object> {
  // Define the data URL
  //const dataUrl = 'http://api.openweathermap.org/data/2.5/weather?q=iowa%20city&appid=fb752b871b555c976809c474358f6bd9';
  const dataUrl = 'https://api.nigelbpeck.com/';
  // Prepare the request
  return this.http.get(dataUrl);
}
async presentLoading() {
  // Prepare a loading controller
  this.loading = await this.loadingController.create({
      message: 'Loading...'
  });
  // Present the loading controller
  await this.loading.present();
}
	
async ionViewWillEnter() {
	// Present a loading controller until the data is loaded
  await this.presentLoading();
	// Load the data
  this.prepareDataRequest()
      .pipe(
          finalize(async () => {
              // Hide the loading spinner on success or error
              await this.loading.dismiss();
          })
      )
	  .subscribe(
      data => {
        // Set the data to display in the template
        this.data = JSON.stringify(data);
      },
      err => {
        // Set the error information to display in the template
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
      }
    );
  }
}







