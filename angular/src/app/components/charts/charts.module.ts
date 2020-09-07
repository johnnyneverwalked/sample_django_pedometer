import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {VerticalBarChartComponent} from './vertical-bar-chart/vertical-bar-chart.component';


@NgModule({
    declarations: [VerticalBarChartComponent],
    imports: [
        CommonModule,
        NgxChartsModule
    ],
    exports: [
        VerticalBarChartComponent
    ],
    providers: [NgxChartsModule]
})
export class ChartsModule {
}
