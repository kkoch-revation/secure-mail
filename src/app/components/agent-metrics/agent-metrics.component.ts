import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-metrics',
  templateUrl: './agent-metrics.component.html',
  styleUrls: ['./agent-metrics.component.scss'],
})
export class AgentMetricsComponent implements OnInit {

  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 8000,
    },
  };

  constructor() { }

  ngOnInit() {}

}
