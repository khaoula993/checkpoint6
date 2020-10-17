import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-themeclass',
  templateUrl: './themeclass.component.html',
  styleUrls: ['./themeclass.component.css']
})
export class ThemeclassComponent implements OnInit {
theme = '';
  constructor() { }

  ngOnInit(): void {
  }
  changetheme(theme : string){
    this.theme=theme;
      }
}
