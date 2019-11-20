import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public events: Events) { }

  public createUser(user) {
    this.events.publish('cambio', user);
    console.log(user);
  }
}
