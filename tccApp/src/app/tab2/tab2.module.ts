import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';
import { HTTP } from '@ionic-native/http/ngx';
//import { HttpClient } from 'selenium-webdriver/http';

//import { Camera } from '@ionic-native/camera'

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page],
  providers:[HTTP]
})
export class Tab2PageModule {}
