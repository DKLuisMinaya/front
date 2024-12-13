import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsersService } from '../service/user.service';

@Component({
  selector: 'app-citas-doc',
  templateUrl: './citas-doc.page.html',
  styleUrls: ['./citas-doc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CitasDocPage implements OnInit {
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
        debugger
      },
      error:(error:any)=>{
        debugger
      }
    })

  }
  
}
