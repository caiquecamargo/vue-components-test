import { Observer } from '../../../../controllers/Observer';
import { InjectionKey } from "@vue/runtime-core";
export declare const HeaderObserverKey: InjectionKey<HeaderObserver>;
export declare class HeaderObserver extends Observer {
    private _element?;
    protected _observer: IntersectionObserver;
    constructor();
    set element(element: HTMLElement | undefined);
    get element(): HTMLElement | undefined;
    private setActive;
    private unsetActive;
    byPassObserver(): void;
    protected observerCallback: IntersectionObserverCallback;
}
