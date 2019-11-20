import { Events } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss'],
})
export class DestinoComponent implements OnInit {
  myuser = "Salomon";
  constructor(public events: Events) {
    events.subscribe('cambio', (user) => {
      console.log(user);
      this.myuser = user;
    });
  }

  ngOnInit() { }


}
