import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.page.html',
  styleUrls: ['./doc-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ]
})
export class DocPagePage implements OnInit {
user:any;
  constructor() { }

  ngOnInit() {
    this.user= localStorage.getItem('nombre')
  }


}
