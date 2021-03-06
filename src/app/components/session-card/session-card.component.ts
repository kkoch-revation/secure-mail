import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';  
import { PopoverSessionComponent } from '../popover-session/popover-session.component';


@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
})
export class SessionCardComponent implements OnInit {

  constructor(public popoverController: PopoverController) { 
    
  }

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
