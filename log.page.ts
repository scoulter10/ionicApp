import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {

  public items: any;

  constructor(public navCtrl: NavController,
              public http: HttpClient,
              private route: Router,
              private alertCtrl: AlertController) {
this.getData();

    }

  ngOnInit() {
  }

  getData() {
    let data: Observable<any>;
    data = this.http.get('http://192.168.0.100:4010/read.php');
    data.subscribe(result => {
      this.items = result;
  });
}
goAdd() {
  this.navCtrl.navigateForward(['addlog']);
}

goProfile() {
  this.navCtrl.navigateBack(['profile']);
}

}
