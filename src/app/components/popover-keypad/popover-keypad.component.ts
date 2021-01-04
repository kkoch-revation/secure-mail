import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-keypad',
  templateUrl: './popover-keypad.component.html',
  styleUrls: ['./popover-keypad.component.scss'],
})
export class PopoverKeypadComponent implements OnInit {

  constructor(public popoverController: PopoverController) {}

  async presentPopoverKeypad(ev) {
    const popover = await this.popoverController.create({
      component: PopoverKeypadComponent,
      cssClass: 'rev-popover-keypad',
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