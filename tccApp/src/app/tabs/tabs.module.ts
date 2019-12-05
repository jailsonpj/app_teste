import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TabsPageRoutingModule } from './tabs.router.module';


import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab3PageModule } from '../tab3/tab3.module';

import { Camera} from '@ionic-native/camera/ngx';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    Tab1PageModule,
    Tab2PageModule,
    Tab3PageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage],
  providers: [Camera]
})
export class TabsPageModule {}
