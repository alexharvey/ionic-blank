import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';

import {NavController, Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public people: Array<Object>;

  constructor(public navCtrl: NavController, private platform: Platform, private storage: Storage) {
    this.platform.ready().then(() => {
      this.refresh();
    });
  }

  public add() {
    this.storage.set('firstName', 'Max');
    this.storage.set('lastName', 'Planck');
  }

  public refresh() {
    this.people = [];
    this.storage.get('firstName').then((firstName) => {
      console.log('Your first name is ', firstName);
      this.storage.get('lastName').then((lastName) => {
        console.log('Your last name is ', lastName);
        this.people.push({firstname: firstName, lastname: lastName});
      })
    })
  }

}
