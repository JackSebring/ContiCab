import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginData= {email:'jack@continental-corporation.com',password:'jack100'};

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {

  }
  gotoSetup(){
    if(!this.loginData['email']){
      alert("Please Enter your email address")
      return
    }
    else if(!this.loginData['password']){
      alert("Please enter your password")
      return
    }
    this.presentLoading()
    console.log(this.loginData);
    this.navCtrl.push("SetupPage")
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  

}
