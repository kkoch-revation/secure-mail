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
  public speedDialsExternal = [
    {
      name: 'Central Processing',
      number: '(952) 392-1831',
      ext: '2223'
    },
    {
      name: 'Interpreter Services - Spanish',
      number: '(952) 392-1831',
      ext: '4445'
    },
    {
      name: 'Interpreter Services - French',
      number: '(952) 392-1831',
      ext: '2222'
    },
    {
      name: 'Interpreter Services - Japanese',
      number: '(952) 392-1831',
      ext: '4449'
    },
    {
      name: 'Escalation Queue',
      number: '(952) 392-1831',
      ext: '2222'
    },
    
  ];

  constructor() { }

  ngOnInit() {}

}
