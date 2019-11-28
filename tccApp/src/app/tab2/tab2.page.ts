import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import {HTTP} from '@ionic-native/http/ngx';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  imagem: string;
  teste:any =null;
  message: string;
  img_api: any= null;

  private API_URL = 'https://deploy-tcc.herokuapp.com/predict'

  private options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera, private sn: DomSanitizer, public http: HTTP,
     public loadingCrtl: LoadingController,public toast: ToastController) { }

  ngOnInit() {
    this.baterFoto();
    //console.log("TTTOO")
  }

  baterFoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      console.log(imageData);
      this.imagem = 'data:image/jpeg;base64,' + imageData;
      this.img_api = imageData;
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }

  predictImg(){
    
    let data_img = {
      "image" : this.img_api,
    }
    //alert("TE")
    alert(this.img_api);
    this.http.post(this.API_URL, data_img, {}).then(data => {
      //resolve(data.data.json());
      alert('Entrou');
      this.message = data.data;
      alert(this.message);
      }).catch((error) => {
    });

  }

}
