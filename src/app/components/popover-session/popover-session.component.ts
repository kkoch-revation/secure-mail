import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-session',
  templateUrl: './popover-session.component.html',
  styleUrls: ['./popover-session.component.scss'],
})
export class PopoverSessionComponent implements OnInit {

  constructor(public popoverController: PopoverController) {}

  async presentPopoverSession(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverSessionComponent,
      cssClass: 'rev-popover-session',
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
