import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Usuario: string="";
  Contrasena: string="";
  constructor(public navCtrl: NavController,public alerCtrl: AlertController) {

  }
  /*ingreso() {
    const alert = this.alerCtrl.create({
      title: 'Mensaje',
      subTitle: 'Acceso Denegado  ' + this.Usuario,
      buttons: ['OK']
    });
    alert.present();
  }*/

  validar()
  {
    if (this.Usuario=="")
    {
      const alert = this.alerCtrl.create({
        title: 'Mensaje',
        subTitle: 'Ingrese Usuario',
        buttons: ['Volver']
      });
     alert.present();
    }
    else if(this.Contrasena=="")
    {
      const alert = this.alerCtrl.create({
        title: 'Mensaje',
        subTitle: 'Ingrese contraseña',
        buttons: ['Volver']
      });
    alert.present();

    }
    else
    {
      const alert = this.alerCtrl.create({
        title: 'Mensaje',
        subTitle: 'Bienvenido  ' + this.Usuario,
        buttons: ['OK']
      });
      alert.present();
    }
    
  }

  recupera() {
    let confirm = this.alerCtrl.create({
      title: 'Recuperar contraseña',
      message: 'Ingrese el correo donde desea recibir la contraseña',
      inputs: [
        {
          name: 'Correo',
          placeholder: 'Correo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: correo => {
            this.envio(correo.Correo);
            //console.log('Saved clicked');
          }
        }
      ]
    });
    confirm.present()
  }
  envio(correo) {
    const alert = this.alerCtrl.create({
      title: 'Envio',
      subTitle: correo,
      buttons: ['OK']
    });
    alert.present();
  }
 
}
