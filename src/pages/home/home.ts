import { Component, Input } from '@angular/core';
import {Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  feed = [];

  constructor(
    private http:Http,
    public navCtrl: NavController) {}

  ngOnInit() {
    console.log("hello");

    this.http.get('api/feed/main')
            .subscribe(response =>{
                this.feed = response.json();
              })
  }

  readMore(link:string){
    let browser = new InAppBrowser(link, '_system');

    browser.show();
  }
}
