import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {StepsService} from "../../../services/http/steps.service";
import {ActivatedRoute} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {IDay} from "../../../interfaces/IDay";
import {FormBuilder, FormGroup} from "@angular/forms";
import * as moment from "moment";
import {cloneDeep} from "lodash";
import {fade} from "../../../animations/enter-leave.animation";

@Component({
  selector: 'app-daily-steps',
  templateUrl: './daily-steps.component.html',
  styleUrls: ['./daily-steps.component.scss'],
  animations: [
    fade
  ]
})
export class DailyStepsComponent implements OnInit, OnDestroy {

  day: IDay;
  form: FormGroup;
  showSuccess: boolean;
  showError: boolean;
  disabled: boolean = true;

  private _unsub$: Subject<void> = new Subject<void>();

  constructor(
    private stepsService: StepsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: null,
      steps: null,
    });

    this.form.get("date").valueChanges.pipe(takeUntil(this._unsub$)).subscribe((val: any) => {
      if (typeof val === "object") {
        val = `${val?.year}-${val?.month}-${val?.day}`;
      }
      const date = moment(val, "YYYY-MM-DD");
      if (date.isValid()) {
        this.getDateSteps(date.format("YYYY-MM-DD"));
      }
    });

    this.form.valueChanges.pipe(takeUntil(this._unsub$)).subscribe((val: any) => {
      this.disabled = !val.date || val.steps < 1 || val.steps > 50000
    });

    this.route.queryParams.pipe(takeUntil(this._unsub$)).subscribe((val: any) => {
      if (val.date) {
        this.getDateSteps(val.date);
        this.form.patchValue({date: val.date})
      }
    });
  }

  ngOnDestroy() {
    this._unsub$.next();
  }

  getDateSteps(date: string) {
    this.stepsService.getByDate(date).subscribe((res: IDay) => {
      this.day = res;
    }, e => console.error(e))
  }

  save() {
    let data = cloneDeep(this.form.value);
    if (typeof data.date === "object") {

      data.date = `${data.date?.year}-${data.date?.month}-${data.date?.day}`
    }
    if (this.day?.id && moment(this.day?.date).isSame(moment(data.date), "d")) {
      this.stepsService.update(this.day.id, data).subscribe((res: IDay) => {
        this.day = res;
        this.showSuccess = true;
        setTimeout(() => this.showSuccess = false, 2000);
      }, e => {
        this.showError = true;
        setTimeout(() => this.showError = false, 2000);
      });
    } else {

      this.stepsService.create(data).subscribe((res: IDay) => {
        this.day = res;
        this.showSuccess = true;
        setTimeout(() => this.showSuccess = false, 2000);
      }, e => {
        this.showError = true;
        setTimeout(() => this.showError = false, 2000);
      });
    }
  }

}
