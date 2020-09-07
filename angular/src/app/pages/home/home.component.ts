import { Component, OnInit } from '@angular/core';
import {pulsate} from "../../animations/enter-leave.animation";
import {StepsService} from "../../services/http/steps.service";
import * as moment from "moment";
import {IDay} from "../../interfaces/IDay";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    pulsate
  ],
  providers: [StepsService]
})
export class HomeComponent implements OnInit {

  day: IDay;
  date = moment().format("YYYY-MM-DD")

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.stepsService.getByDate(this.date).subscribe((res: IDay) => {
      this.day = res;
    }, e => {
      if (e.status !== 404) {
        console.error(e)
      }
    })
  }

}
