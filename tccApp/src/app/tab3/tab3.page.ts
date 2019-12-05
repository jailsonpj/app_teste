import { Component, OnInit } from '@angular/core';
//import { File } from '@ionic-native/file';
//import { Transfer} from '@ionic-native/transfer';
//import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
//import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  imageSrc: any = null;

  private options: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    mediaType: this.camera.MediaType.PICTURE,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  }

  constructor(private camera: Camera, private sn: DomSanitizer) { }

  ngOnInit() {
    this.abrirGaleria();
  }

  abrirGaleria(){
    this.camera.getPicture(this.options).then((imageData) => {
      this.imageSrc = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }}