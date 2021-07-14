import { HorizontalSlider } from "./HorizontalSlider";
interface HorizontalSliderOptions {
    visibleElements?: number;
}
export declare class HorizontalSliderController extends HorizontalSlider {
    protected _distance: number;
    protected _width: number;
    protected _visibleElements: number;
    constructor(element: HTMLElement, position: number, length: number, options?: HorizontalSliderOptions);
    static createElementContainer(element: HTMLElement): HTMLElement;
    protected setElementAttributes(): number;
    protected onTerminated(): void;
    protected animeOptions(): {};
    protected calcTranslationX(): number[];
    protected setVisibility(): void;
    protected setParentElementAttributes(): void;
    protected createAnimation(): void;
    protected setPosition(): void;
}
export {};
