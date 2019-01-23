
class TimeSlicing<T> {
    private task: (params: T)=> void;
    private delaytime: number;
    private timeid = 0;
    private params: T[] = [];
    private count = 0;
    private taskpools: any[] = [];
    /**
     * 传递一个默认的无参任务函数
     * @param task 可定义有参函数
     * @param delaytime 多久刷新一次 单位: ms
     */
    constructor(task: (params: T)=>void,delaytime: number) {
        this.task = task;
        this.delaytime = delaytime;
    }
    public execute(index: number) {
        clearTimeout(this.timeid);
        if (this.params === undefined) {
            this.timeid = setTimeout(this.task,this.delaytime);
        } else {
            this.timeid = setTimeout(()=>this.task(this.params[index]),this.delaytime);
        }
    }
    /**
     * next
     */
    public nextExecute(num: number) {
        const that = this;
        if(num > this.count) {
            return;
        } else {
            setTimeout(
                () => {
                    console.log("that.params[num]",that.params[num]);
                    that.task(that.params[num]);
                    that.nextExecute(num + 1);
                },
                that.delaytime
            );
        }
    }
    public appendData(data: T) {
        this.count += 1;
        this.params.push(data);
    }
    public appendTask(task: () => void) {
        this.taskpools.push(task);
    }
    public start() {
        this.nextExecute(0);
    }
    public startTask() {
        const that = this;
        setTimeout(
            () => {
                const task = this.taskpools.shift();
                if( task === undefined ) {
                    return;
                } else {
                    task();
                    this.startTask();
                }
            },
            this.delaytime
        );
    }

}

export default TimeSlicing;
