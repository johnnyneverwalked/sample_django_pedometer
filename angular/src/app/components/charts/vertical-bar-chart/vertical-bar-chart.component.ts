import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBasicChartEntry, IChartActivationEvent, IChartColorScheme, IChartExtraOptions} from "../../../interfaces/IChart";

@Component({
    selector: 'app-vertical-bar-chart',
    templateUrl: './vertical-bar-chart.component.html',
    styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent implements OnInit {

    @Input() set data(data: IBasicChartEntry[]) {
        this._chartData = data;
        this.cd.detectChanges();
    }

    @Input() set width(width: number) {
        this.dimensions = [width, this.dimensions?.[1]];
        this.cd.detectChanges();
    }

    @Input() set height(height: number) {
        this.dimensions = [this.dimensions?.[0], height];
        this.cd.detectChanges();
    }

    @Input() set options(opts: IChartExtraOptions) {
        if (!opts) {
            return;
        }
        for (let key of Object.keys(opts)) {
            if (this.hasOwnProperty(key)) {
                this[key] = opts[key];
            }
        }
        this.cd.markForCheck();
    }

    @Input("legendTitle") set setLegendTitle(title: string) {
        this.legendTitle = title;
        this.cd.markForCheck();
    }

    @Input("legendPosition") set positionLegend(pos: "below"|"right") {
        this.legendPosition = pos;
        this.cd.markForCheck();
    }

    @Input("showLegend") set legendVisibility(visible: boolean) {
        this.showLegend = visible;
        this.cd.markForCheck();
    }

    @Input("hasTooltip") set disableTooltip(tooltip: boolean) {
        this.hasTooltip = tooltip;
        this.cd.markForCheck();
    }

    @Input("colorScheme") set customColorScheme(colorScheme: string[]) {
        this.colorScheme = {domain: colorScheme || []};
        this.cd.markForCheck();
    }

    @Input("showLabels") set labelVisibility(visible: {xAxis: boolean, yAxis: boolean}) {
        this.showLabels = visible;
        this.cd.markForCheck();
    }

    @Input("labels") set labelText(labels: {xAxis: string, yAxis: string}) {
        this.labels = labels;
        this.cd.markForCheck();
    }

    @Input("showAxis") set AxisVisibility(visible: {xAxis: boolean, yAxis: boolean}) {
        this.showAxis = visible;
        this.cd.markForCheck();
    }

    @Output() selectBar = new EventEmitter<IBasicChartEntry>();
    @Output() activateBar = new EventEmitter<IChartActivationEvent>();
    @Output() deactivateBar = new EventEmitter<IChartActivationEvent>();

    public dimensions: number[] = undefined; // [w, h]
    public showLegend: boolean = true;
    public showAnimations: boolean = true;
    public hasTooltip: boolean = true;
    public legendPosition: "below"|"right" = "below";
    public legendTitle: string;
    public isGradient: boolean = false;
    public showLabels: {xAxis: boolean, yAxis: boolean} = {xAxis: true, yAxis: true};
    public showAxis: {xAxis: boolean, yAxis: boolean} = {xAxis: true, yAxis: true};
    public labels: {xAxis: string, yAxis: string};

    public colorScheme: IChartColorScheme = {
        domain: [
            '#FF8A80',
            '#EA80FC',
            '#8C9EFF',
            '#80D8FF',
            '#A7FFEB',
            '#CCFF90',
            '#FFFF8D',
            '#FF9E80'
        ]
    };


    private _chartData: IBasicChartEntry[] = [];

    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
    }

    public get chartData() {
        return this._chartData || [];
    }

}
