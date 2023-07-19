import { Component, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { MyModalComponent } from '../modals/my-modal/my-modal.component';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [NgIf, NgForOf, IonicModule, MyModalComponent],
})
export class HomePage {
  private readonly modalController = inject(ModalController);
  private chatPanel?: any;
  messages = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'In vulputate purus ut eros posuere, vel rutrum augue aliquet.',
     'Nam lobortis justo diam, id tincidunt ligula convallis vitae.',
     'Mauris vulputate, dolor eget consectetur pharetra.',
     'Ligula massa ultricies elit, eget rutrum eros ante ut felis.'
  ];
  chatWindowIsVisible = true;
  constructor() {}

  public openChatPanel() {
    this.chatWindowIsVisible = true;
  }

  public closeChatPanel() {
    this.chatWindowIsVisible = false;
  }

  public toggleChatPanel() {
    this.chatWindowIsVisible != this.chatWindowIsVisible;
  }

  public async openModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: MyModalComponent,
      showBackdrop: false
    });
    await modal.present();
    const theTop = await this.modalController.getTop();
    const topZIndex = theTop?.style.zIndex || 0;
    console.log('top', theTop);
  }
}
