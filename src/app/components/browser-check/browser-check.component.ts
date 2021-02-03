import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-browser-check',
  templateUrl: './browser-check.component.html',
  styleUrls: ['./browser-check.component.scss'],
})
export class BrowserCheckComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  async presentBrowserCheck() {
    const modal = await this.modalController.create({
      component: BrowserCheckComponent,
      cssClass: 'rev-browser-check'
    });
    return await modal.present();
  }
  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {}

}
