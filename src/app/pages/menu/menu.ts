import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  styleUrls: ['./menu.scss'],
})
export class MenuPage {
  location = 'madison';
 

  constructor(private platform : Platform) {
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
   }

   goToPage(dest){
    console.log(dest)
  }
  btConnect(){
    alert("bt bağlantısı")
  }
}

