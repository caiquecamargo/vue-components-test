import { AnimeInstance, AnimeParams } from "animejs";
export declare type SliderType = "left" | "right";
export declare abstract class HorizontalSlider {
    protected _element: HTMLElement;
    protected _position: number;
    protected _length: number;
    protected _animation: AnimeInstance | undefined;
    protected _type: SliderType;
    protected _from: number;
    protected _to: number;
    protected abstract _distance: number;
    protected abstract _width: number;
    constructor(_element: HTMLElement, _position: number, _length: number);
    protected abstract setVisibility(): void;
    protected abstract setElementAttributes(): void | number;
    protected abstract onTerminated(): void;
    protected abstract createAnimation(): void;
    protected abstract setPosition(): void;
    protected abstract calcTranslationX(): number[];
    protected abstract animeOptions(): AnimeParams;
    turn(type: SliderType): Promise<void>;
    protected animate(): Promise<void> | undefined;
    protected swap(): void;
    protected enter(): void;
    protected leave(): void;
}
