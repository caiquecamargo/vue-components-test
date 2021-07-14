import { InjectionKey } from "vue";
import { Observer } from "../../../../controllers/Observer";
export declare const elementObserverKey: InjectionKey<ElementObserver>;
export declare class ElementObserver extends Observer {
    protected _observer: IntersectionObserver;
    constructor();
    protected observerCallback: IntersectionObserverCallback;
}
