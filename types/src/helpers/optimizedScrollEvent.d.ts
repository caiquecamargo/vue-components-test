declare class OptimizedScrollEvent {
    private callbacks;
    private running;
    constructor();
    private runCallbacks;
    private scroll;
    private addCallback;
    add(callback: Function): void;
}
export declare const optimizedScrollEvent: OptimizedScrollEvent;
export {};
