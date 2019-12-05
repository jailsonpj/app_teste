import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pushPage: any;
  constructor(private router: Router, public navCtrl: NavController) {
    
  }
}
