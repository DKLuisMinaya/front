import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eyeOutline, folderOpenOutline, homeOutline, personOutline} from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import {UsersService} from '../service/user.service'
@Component({
  selector: 'app-citas-client',
  templateUrl: './citas-client.page.html',
  styleUrls: ['./citas-client.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, RouterLink]
})
export class CitasClientPage implements OnInit {
  profile:any;
  personid:any;

  constructor(private usuarioService:UsersService) {
    this.personid = localStorage.getItem('id');
   }

  ngOnInit() {
    this. viewProfile();
  }
  viewProfile(){
    this.usuarioService.getOneUser(this.personid).subscribe({
      next:(data:any)=>{
        this.profile=data;
        
      },
      error:(error:any)=>{
        
      }
    })
  }
}
