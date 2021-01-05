import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-keypad',
  templateUrl: './modal-keypad.component.html',
  styleUrls: ['./modal-keypad.component.scss'],
})
export class ModalKeypadComponent implements OnInit {

  constructor(public modalController: ModalController) {

  }
 
  async presentModalKeypad() {
    const modal = await this.modalController.create({
      component: ModalKeypadComponent,
      cssClass: 'rev-modal-keypad'
    });
    return await modal.present();
  }
  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {}

}
