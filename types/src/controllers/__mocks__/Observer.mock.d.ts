import { Observer } from "../../controllers/Observer";
export declare class ObserverMock extends Observer {
    protected _observer: IntersectionObserver;
    constructor();
    observerCallback: IntersectionObserverCallback;
}
