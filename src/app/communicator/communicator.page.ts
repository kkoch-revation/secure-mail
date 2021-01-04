import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';  
import { ModalController } from '@ionic/angular'; 
import { PopoverContactsComponent } from '../components/popover-contacts/popover-contacts.component';
import { PopoverSessionComponent } from '../components/popover-session/popover-session.component';
import { PopoverKeypadComponent } from '../components/popover-keypad/popover-keypad.component';
import { ModalKeypadComponent } from '../components/modal-keypad/modal-keypad.component';

@Component({
  selector: 'app-communicator',
  templateUrl: './communicator.page.html',
  styleUrls: ['./communicator.page.scss', './communicator.desktop.scss']
})
export class CommunicatorPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController
    ) { }

  async presentPopoverContacts(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverContactsComponent,
      cssClass: 'rev-popover-contacts',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async presentPopoverKeypad(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverKeypadComponent,
      cssClass: 'rev-popover-keypad',
      translucent: true
    });
    return await popover.present();
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
  async presentModalKeypad() {
    const modal = await this.modalController.create({
      component: ModalKeypadComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  dismissModal() {
    this.modalController.dismiss();
  }

  revDefault() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("rev-default");
    element.classList.remove(
      "rev-showAll",
      "rev-mediaMessages",
      "rev-messagesSessions",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  showMediaMessages() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-mediaMessages");
    element.classList.remove(
      "rev-showAll",
      "rev-messagesSessions",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  showMessagesSessions() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-messagesSessions");
    element.classList.remove(
      "rev-showAll",
      "rev-mediaMessages",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  showAll() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-showAll");
    element.classList.remove(
      "rev-mediaMessages",
      "rev-messagesSessions",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  focusMedia() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-focusMedia");
    element.classList.remove(
      "rev-showAll",
      "rev-mediaMessages",
      "rev-messagesSessions",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  focusMessages() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-focusMessages");
    element.classList.remove(
      "rev-showAll",
      "rev-mediaMessages",
      "rev-messagesSessions",
      "rev-focusMedia",
      "rev-focusSessions"
    );
  }
  focusSessions() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-focusSessions");
    element.classList.remove(
      "rev-showAll",
      "rev-mediaMessages",
      "rev-messagesSessions",
      "rev-focusMedia",
      "rev-focusMessages"
    );
  }
  toggleMetrics() {
    var element = document.getElementById("communicator");
    element.classList.toggle("rev-metrics");
  }
  toggleDisposition() {
    var element = document.getElementById("rev-chat-container");
    element.classList.toggle("rev-toggle-disposition");
  }

  ngOnInit() {
  }

}
