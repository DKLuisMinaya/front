import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule, RouterLink]
})
export class SignupPage implements OnInit {

  constructor(private ruta:Router, private alerta:AlertController, private load:LoadingController, private userS:UsersService ) { }

  ngOnInit() {
  }

  async registro(user:any, email:any, dni:any, password:any){
    const loading = await this.load.create({
      message: 'Cargando',
      spinner: 'circles'
    });

    loading.present();
    this.userS.registro(user.value,email.value, dni.value, password.value, ).subscribe({
      next: async (dato:any) =>{
        loading.dismiss();
        this.ruta.navigateByUrl('login')
        
      },

       error: async (error:any) => {
        loading.dismiss();
        const alert = await this.alerta.create({
          header: 'Ups!',
          message: error.error.message,
          buttons: ['Action'],
        });
    
        await alert.present();

      }
    })
  }
}
