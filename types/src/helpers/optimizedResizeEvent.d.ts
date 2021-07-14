declare class OptimizedResizeEvent {
    private callbacks;
    private running;
    constructor();
    private runCallbacks;
    private resize;
    private addCallback;
    add(callback: Function): void;
}
export declare const optimizedResizeEvent: OptimizedResizeEvent;
export {};
