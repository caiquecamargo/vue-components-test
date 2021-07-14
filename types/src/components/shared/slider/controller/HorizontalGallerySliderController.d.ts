import anime from "animejs";
import { HorizontalSlider } from "./HorizontalSlider";
interface HorizontalGallerySliderOptions {
    visibleElements?: number;
    width?: number;
}
export declare class HorizontalGallerySliderController extends HorizontalSlider {
    protected _distance: number;
    protected _width: number;
    protected _center: number;
    protected _visibleLayer: number;
    constructor(element: HTMLElement, position: number, length: number, options?: HorizontalGallerySliderOptions);
    protected calcLayer(number: number): number;
    protected setZ(): void;
    protected isVisible(layer: number): boolean;
    protected setVisibility(): void;
    protected setElementAttributes(): void;
    protected onTerminated(): void;
    protected createAnimation(): void;
    protected setPosition(): void;
    protected calcTranslationX(): number[];
    protected calcScale(): number[];
    protected animeOptions(): anime.AnimeParams;
}
export {};
