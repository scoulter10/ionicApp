import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController,
              private router: Router,
              private navctrl: NavController,
              public loadingCtrl: LoadingController,
              // tslint:disable-next-line: deprecation
              private http: Http

            ) {}

  goInfo() {
    this.navctrl.navigateForward(['information']);
  }

  signIn() {
    this.navctrl.navigateForward(['profile']);
  }
}

  /*
async signIn() {

    if (this.piname.length === 0) {

      const alert = await this.alertCtrl.create({

      header: 'ATTENTION',

      subHeader: 'Pi name field is empty',

      buttons: ['OK']

      });

      alert.present();
  } else

  if (this.piip.length === 0) {

    const alert = await this.alertCtrl.create({

    header: 'ATTENTION',

    subHeader: 'Pi IP address field is empty',

    buttons: ['OK']

    });

    alert.present();

    } else {

   /*  // tslint:disable-next-line: deprecation
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    headers.append('Content-Type', 'application/json' );

    // tslint:disable-next-line: deprecation
    const options = new RequestOptions({ headers });

    const data = {

    piname: this.piname.value,

    piip: this.piip.value */

    // };

    // tslint:disable-next-line: prefer-const
 /*    let loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });

    loading.present().then(() => {
      this.http.post('http://192.168.1.10:4010/login.php', data).pipe(map(res => {
        return res.json()
          // tslint:disable-next-line: no-shadowed-variable
          .subscribe(async res => {
            console.log(res);
            this.loadingCtrl.dismiss();
            if (res === 'Successful login') {
              const alert = await this.alertCtrl.create({
                header: 'Welcome',
                subHeader: (res),
                buttons: ['OK']
              });
              alert.present();
              this.navctrl.navigateForward('profile');
            } else {

            const alert = await this.alertCtrl.create({

            header: 'Error',

            subHeader: 'Login details invalid',

            buttons: ['OK']

            });

            alert.present();

            }

            });
           }));

            });

            }
}  */

