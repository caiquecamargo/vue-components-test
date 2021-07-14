import { Provider } from "./Provider";
interface ObserverOptions {
    root?: HTMLElement;
}
export declare abstract class Observer extends Provider {
    protected abstract _observer: IntersectionObserver;
    protected _root?: HTMLElement;
    constructor(name: Symbol, options?: ObserverOptions);
    get observer(): IntersectionObserver;
    set observer(observer: IntersectionObserver);
    observe(element: HTMLElement): void;
    protected abstract observerCallback: IntersectionObserverCallback;
}
export {};
