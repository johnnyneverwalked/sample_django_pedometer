import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepHistoryComponent } from './step-history/step-history.component';
import { DailyStepsComponent } from './daily-steps/daily-steps.component';
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {ButtonModule} from "../../components/button/button.module";
import {ChartsModule} from "../../components/charts/charts.module";

const routes: Route[] = [
  {
    path: "daily",
    component: DailyStepsComponent
  },
  {
    path: "history",
    component: StepHistoryComponent
  }
]

@NgModule({
  declarations: [StepHistoryComponent, DailyStepsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    ButtonModule,
    ChartsModule
  ]
})
export class StepsModule { }
