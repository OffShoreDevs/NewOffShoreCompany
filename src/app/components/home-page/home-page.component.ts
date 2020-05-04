import { Component, OnInit } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
