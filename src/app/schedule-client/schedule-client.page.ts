import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eyeOutline, folderOpenOutline, homeOutline, personOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-schedule-client',
  templateUrl: './schedule-client.page.html',
  styleUrls: ['./schedule-client.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, RouterLink]
})
export class ScheduleClientPage implements OnInit {

  constructor() {
    addIcons({ eyeOutline, folderOpenOutline, homeOutline, personOutline});
   }

  ngOnInit() {
  }
}
