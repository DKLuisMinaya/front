import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router, RouterLink} from '@angular/router'
import { UsersService } from '../service/user.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class LoginPage implements OnInit {

  constructor( private router:Router, private userS:UsersService, private load:LoadingController, private ruta:Router, private alerta:AlertController ) { }

  ngOnInit() {
  }

  async login(dni: any, password: any) {
    const loading = await this.load.create({
        message: 'Cargando',
        spinner: 'circles'
    });

    loading.present();

    this.userS.login(dni.value, password.value).subscribe({
        next: async (dato: any) => {
            loading.dismiss();

            localStorage.setItem('TOKEN', dato.token);
            localStorage.setItem('id', dato.dataUser.id);
            localStorage.setItem('nombre', dato.dataUser.user);
            
            const rol = dato.dataUser.rol; 
            if (rol === 2) {
                this.router.navigateByUrl('doc-page');
            } else if (rol === 3) {
                this.router.navigateByUrl('client-page');
            } else {
                const alert = await this.alerta.create({
                    header: 'Error',
                    message: 'Algo ha ocurrido intentalo de nuevo mas trade',
                    buttons: ['Ok'],
                });
                await alert.present();
            }
        },
        error: async (error: any) => {
            loading.dismiss();
            const alert = await this.alerta.create({
                header: 'Ups!',
                message: error.error.message,
                buttons: ['Ok'],
            });

            await alert.present();
        }
    });
  }
}
