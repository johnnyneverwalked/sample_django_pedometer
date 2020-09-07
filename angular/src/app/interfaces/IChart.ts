
export interface IBasicChartEntry {
    extra?: any;
    name: string;
    value: number;
}

export interface IGroupChartEntry {
    name: string;
    series: IBasicChartEntry[];
}

export interface IChartExtraOptions {
    showAnimations?: boolean;
    isGradient?: boolean;
    isDoughnut?: boolean;
    explodeSlices?: boolean;
    maxLabelLength?: number;
    tooltipTextFn?: (tooltip: {data: IBasicChartEntry, [key: string]: any}) => string;
    xAxisTickFormatting?: (tooltip: {data: IBasicChartEntry, [key: string]: any}) => string;
    yAxisTickFormatting?: (tooltip: {data: IBasicChartEntry, [key: string]: any}) => string;
}

export interface IChartActivationEvent {
    entries: IBasicChartEntry[];
    value: IBasicChartEntry;
}

export interface IChartColorScheme {
    domain: string[];
}
