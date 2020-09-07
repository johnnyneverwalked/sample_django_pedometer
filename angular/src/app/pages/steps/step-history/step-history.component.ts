import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IBasicChartEntry} from "../../../interfaces/IChart";
import {StepsService} from "../../../services/http/steps.service";
import {IDay} from "../../../interfaces/IDay";
import {cloneDeep} from "lodash";
import * as moment from "moment";

@Component({
  selector: 'app-step-history',
  templateUrl: './step-history.component.html',
  styleUrls: ['./step-history.component.scss']
})
export class StepHistoryComponent implements OnInit {

  public dateRange: FormGroup;
  public chartData: IBasicChartEntry[];
  public days: IDay[] = []

  constructor(
    private fb: FormBuilder,
    private stepsService: StepsService
  ) {
  }

  ngOnInit(): void {
    this.dateRange = this.fb.group({
      date__gte: [null, Validators.required],
      date__lte: [null, Validators.required]
    })
  }

  search() {
    const data = cloneDeep(this.dateRange.value);
    data.date__gte = `${data.date__gte.year}-${data.date__gte.month}-${data.date__gte.day}`;
    data.date__lte = `${data.date__lte.year}-${data.date__lte.month}-${data.date__lte.day}`;

    this.stepsService.retrieve(data).subscribe((res: IDay[]) => {
      this.chartData = [];
      this.days = res;
      const date = moment(data.date__gte);
      const endDate = moment(data.date__lte);
      while (date.isSameOrBefore(endDate, "d")) {
        this.chartData.push({
          name: date.format("YYYY-MM-DD"),
          value: res.find(day => moment(day.date).isSame(date, "d"))?.steps || 0
        })
        date.add(1, "d");
      }
    })
  }

}
