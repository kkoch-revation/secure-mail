import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-contacts',
  templateUrl: './popover-contacts.component.html',
  styleUrls: ['./popover-contacts.component.scss'],
})
export class PopoverContactsComponent implements OnInit {

  constructor(public popoverController: PopoverController) {}

  async presentPopoverContacts(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverContactsComponent,
      cssClass: 'rev-popover-contacts',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  dismissPopover() {
    this.popoverController.dismiss();
  }
  ngOnInit() {}
}
