import { InjectionKey } from "vue";
export declare function numberToReal(number: number): string;
export declare function isMobile(): boolean;
export declare function getGridColumnsQty(): 1 | 2 | 3 | 4;
export declare function onClickOutside(target: HTMLElement, self: HTMLElement): boolean;
export declare function isOdd(number: number): boolean;
export declare function madeOddArray<T>(arr: Array<T>): Array<T>;
export declare function getElement(element: HTMLElement | undefined): HTMLElement;
export declare function injectStrict<T>(key: InjectionKey<T>, fallback?: T): T;
