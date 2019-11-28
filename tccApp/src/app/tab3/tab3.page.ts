import { Component, OnInit } from '@angular/core';
//import { File } from '@ionic-native/file';
//import { Transfer} from '@ionic-native/transfer';
//import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
//import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import {HTTP} from '@ionic-native/http/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  imageSrc: any = null;
  message: string;
  img_api: any= null;

  private API_URL = 'https://deploy-tcc.herokuapp.com/predict'

  private options: CameraOptions = {
    quality: 50,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    mediaType: this.camera.MediaType.PICTURE,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  }

  constructor(private camera: Camera, private sn: DomSanitizer, public http: HTTP) { }

  ngOnInit() {
    this.abrirGaleria();
  }

  abrirGaleria(){
    this.camera.getPicture(this.options).then((imageData) => {
      this.imageSrc = 'data:image/jpeg;base64,' + imageData;
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