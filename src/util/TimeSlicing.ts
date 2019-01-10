
class TimeSlicing {
    private task: ()=> void;
    private delaytime: number;
    private timeid = 0;
    /**
     * 传递一个默认的无参任务函数
     * @param task 无参 任务函数
     */
    constructor(task: ()=>void,delaytime: number) {
        this.task = task;
        this.delaytime = delaytime;
    }
    public execute() {
        clearTimeout(this.timeid);
        this.timeid = setTimeout(this.task,this.delaytime);
    }
}

export default TimeSlicing;
