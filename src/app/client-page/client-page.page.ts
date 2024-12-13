import { Component, OnInit,   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { eyeOutline, folderOpenOutline, homeOutline, personOutline } from 'ionicons/icons';
import { ActionSheetController } from '@ionic/angular';
import { UsersService } from '../service/user.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.page.html',
  styleUrls: ['./client-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class ClientPagePage implements OnInit {
  presentingElement:any;
  profile:any
  personid:any

  constructor(private ruta:Router, private alerta:AlertController, private load:LoadingController, private userS:UsersService,private actionSheetCtrl: ActionSheetController) {
    this.personid = localStorage.getItem('id');
    addIcons({ eyeOutline, folderOpenOutline, homeOutline, personOutline });
   }

  

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this. viewProfile();
  }
  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'No has guardado, tus avances se podian borrar',
      buttons: [
        {
          text: 'si',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  viewProfile(){
    this.userS.getOneUser(this.personid).subscribe({
      next:(data:any)=>{
        this.profile=data;
        
      },
      error:(error:any)=>{
        
      }
    })
}

async registroP(direccion:any, tlf:any, sexo:any, edad:any){
  const loading = await this.load.create({
    message: 'Cargando',
    spinner: 'circles'
  });

  loading.present();
  this.userS.registroP(direccion.value,tlf.value, sexo.value, edad.value, ).subscribe({
    next: async (dato:any) =>{
      loading.dismiss();
      this.ruta.navigateByUrl('client-page')
      
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
