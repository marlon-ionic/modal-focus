import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true
})
export class MyModalComponent  implements OnInit {
  private readonly modalController = inject(ModalController);

  constructor() { }

  ngOnInit() {}

  public async close(): Promise<void> {
    await this.modalController.dismiss();
  }

}
