import * as d3 from "d3-interpolate";
import * as scale from "d3-scale";
(window as any).d3 = d3;

class ColorInterploater {
    private colorranges: string[] = [];
    private numberranges: number[] = [];
    private min: number = 0;
    private max: number = 0;
    private colorinterpolater: any;
    private numberinterpolater: any;
    private scale: any;
    constructor(props: Array<[number,string]>) {
        const {length} = props;
        props.forEach(
            (value: [number,string],index: number)=> {
                this.colorranges[index] = value[1];
                this.numberranges[index] = value[0];
                if(index===0) {
                    this.min = this.max = value[0];
                }
                if(this.min>value[0]) {
                    this.min = value[0];
                }
                if(this.max<value[0]) {
                    this.max = value[0];
                }
            }
        );
        this.colorinterpolater = d3.piecewise(d3.interpolateRgb,this.colorranges);
        this.numberinterpolater = d3.interpolateNumber;

        const ranges: number[] = [];
        props.forEach(
            (value: [number,string],index: number)=> {
                ranges.push((value[0]-this.min)/(this.max-this.min));
            }
        );
        this.scale = scale.scaleLinear().domain(this.numberranges).range(ranges);
    }
    /**
     * getInterploater
     */
    public getColor(value: number): string {
        return this.colorinterpolater(this.scale(value));
    }
}

export default ColorInterploater;
