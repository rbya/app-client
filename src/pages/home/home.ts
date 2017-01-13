import { Component } from '@angular/core';
import {Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import {EnvConfigurationProvider} from "gl-ionic2-env-configuration";
import { EnvConfiguration } from '../../environments/EnvConfiguration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  feed = [];
  config;

  constructor(
    private env: EnvConfigurationProvider<EnvConfiguration>,
    private http:Http,
    public navCtrl: NavController) {
      this.config = env.getConfig();
    }

  ngOnInit() {
    this.http.get(this.config.basePath + 'api/feed/main')
            .subscribe(response =>{
                this.feed = response.json();
              })
  }

  readMore(link:string){
    let browser = new InAppBrowser(link, '_system');

    browser.show();
  }
}
