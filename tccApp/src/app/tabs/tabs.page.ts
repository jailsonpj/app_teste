import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  imagem: any = null;
  message: string;
  private API_URL = 'https://deploy-tcc.herokuapp.com/';

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true
  }


  constructor(private camera: Camera, private sn: DomSanitizer, public nav: NavController, private http: HTTP) { }

  ngOnInit() {
    console.log("TTTOO")
    //alert('ENTROU');

    this.http.get(this.API_URL, {}, {}).then(data => {
      console.log(data.status);
      console.log(data.data);
      this.message = data.data;
      //alert(this.message);
    }).catch(error => {
      console.log(error.status);
      //alert(this.message);

    });
  }

  pushPage2(){
    this.nav.navigateForward("/tabs/tab2");
  }


  pushPage3(){
    this.nav.navigateForward("/tabs/tab3");
  }

}
