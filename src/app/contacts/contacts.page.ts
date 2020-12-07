import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  public contacts: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contacts = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
