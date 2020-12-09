import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  public contacts: string;

  public contactPagesA = [ 
  {
    firstName: 'Aaron',
    lastName: 'Aanistadt',
    phone: '(123) 456-7890',
    ext: '2122',
    avatar: 'avatar-luke.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Andrew',
    lastName: 'Amundson',
    phone: '(123) 321-5454',
    ext: '2129',
    avatar: 'avatar-han.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Ariel',
    lastName: 'Atkins',
    phone: '(123) 321-9922',
    ext: '2127',
    avatar: 'avatar-leia.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Armond',
    lastName: 'Arnold',
    phone: '(123) 456-4321',
    ext: '2125',
    avatar: 'avatar-poe.png',
    url: '/contact/Contact',
  },
];
public contactPagesB = [ 
  {
    firstName: 'Barbara',
    lastName: 'Benson',
    phone: '(123) 456-7890',
    ext: '2122',
    avatar: 'avatar-rey.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Bobby',
    lastName: 'Billingsly',
    phone: '(123) 321-5454',
    ext: '2129',
    avatar: 'avatar-finn.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Benny',
    lastName: 'Bowlesby',
    phone: '(123) 321-9922',
    ext: '2127',
    avatar: 'avatar-ben.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Burton',
    lastName: 'Brewster',
    phone: '(123) 456-4321',
    ext: '2125',
    avatar: 'avatar-poe.png',
    url: '/contact/Contact',
  },
];
public contactPagesC = [ 
  {
    firstName: 'Calvin',
    lastName: 'Camden',
    phone: '(123) 321-5454',
    ext: '2129',
    avatar: 'avatar-han.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Carlton',
    lastName: 'Cadenza',
    phone: '(123) 456-7890',
    ext: '2122',
    avatar: 'avatar-luke.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Carrie',
    lastName: 'Creston',
    phone: '(123) 321-9922',
    ext: '2127',
    avatar: 'avatar-leia.png',
    url: '/contact/Contact',
  },
];
public contactPagesD = [ 
  {
    firstName: 'Darcy',
    lastName: 'DeLahoya',
    phone: '(123) 321-9922',
    ext: '2127',
    avatar: 'avatar-rey.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Demarius',
    lastName: 'DeSantis',
    phone: '(123) 321-5454',
    ext: '2129',
    avatar: 'avatar-finn.png',
    url: '/contact/Contact',
  },
  {
    firstName: 'Donald',
    lastName: 'Deiterhoffen',
    phone: '(123) 456-7890',
    ext: '2122',
    avatar: 'avatar-poe.png',
    url: '/contact/Contact',
  },
];


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contacts = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
