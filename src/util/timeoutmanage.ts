/**
 * TimerManager主要的任务为管理一个任务
 * 并且根据任务进行循环
 *  支持 开启\暂停\继续\重置任务
 * 操作
 */
class TimerManager {
    private taskfunction: (n: number)=>void;
    // 当前任务id
    private timeid: number = 0;
    // 默认一秒
    private intervaltime: number = 1000;
    private min = 0;
    private totallength = 0;
    private localn = 0;
    /**
     * 初始化操作
     * @param task 初始化任务
     * @param intervaltime 初始化间隔时间
     */
    constructor(task: (n: number)=> void,intervaltime: number) {
        this.taskfunction = task;
        this.intervaltime = intervaltime;
    }
    /**
     * 暂停工作,用来暂停当前的执行程序
     * 无参
     */
    public pause(): boolean {
        clearTimeout(this.timeid);
        this.doN(this.localn);
        return true;
    }
    // 继续执行
    public continue(): boolean {
        this.loop(this.localn + 1);
        return true;
    }
    // 开执行程序
    public start() {
        this.pause();
        this.loop(0);
    }
    // 重新开始
    public restart() {
        this.pause();
        this.start();
    }
    /**
     * 执行第几次
     * @param n 当前id
     */
    public doN(n: number) {
        // this.pause();
        this.taskfunction(n);
        this.localn = n;
    }
    public loop(n: number) {
        if(this.totallength !== 0) {
            if(n < this.totallength) {
                this.timeid = setTimeout(()=> {
                    // 执行当前任务
                    this.taskfunction(n);
                    // 同时设置当前的 n 以备能够连续执行
                    this.localn = n;
                    // 同时向下执行任务
                    this.loop(n + 1);
                  },
                    this.intervaltime
                  );
            } else {
                // 两次播放间隔3000
                this.timeid = setTimeout(() => {this.start();},3000);
            }
        } else {
            // 暂停
        }
    }
    public settTotallength(length: number) {
        this.totallength= length;
    }
    public setintervaltime(intervaltime: number) {
        this.intervaltime = intervaltime;
    }
}

export default TimerManager;
