import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  public queues = [
    {
      queue: 'Sales ACD',
      participant: 'Test User',
      timestamp: '04:45',
      take: 'Take Chat'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
