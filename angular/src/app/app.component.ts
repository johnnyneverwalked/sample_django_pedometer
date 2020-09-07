import {Component, OnInit} from '@angular/core';
import {fadeIn} from "./animations/enter-leave.animation";

@Component({
  selector: 'things-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeIn
  ]
})
export class AppComponent implements OnInit{
  title = 'angular-things';

  public enableGradient: boolean;
  public menuOpen: boolean;

  public menu: {path: string; name: string; icon: string, params?: any}[] = [
    {path: "/steps/daily", name: "Steps by day", icon: "la-shoe-prints"},
    {path: "/steps/history", name: "Step history", icon: "la-chart-bar"}
  ];

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
