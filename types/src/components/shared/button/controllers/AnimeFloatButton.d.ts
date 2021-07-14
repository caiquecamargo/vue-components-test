import anime, { AnimeInstance } from "animejs";
import { Anime } from "../../../../controllers/Anime";
export declare enum AnimeFloatButtonState {
    ON_ENTER = 0,
    ON_LEAVE = 1,
    ON_CLICK = 2,
    SELF = 3
}
export declare class AnimeFloatButton extends Anime {
    protected _animation: anime.AnimeInstance | anime.AnimeTimelineInstance;
    private _element;
    state: AnimeFloatButtonState;
    constructor(element: HTMLElement);
    isOnEnter(): boolean;
    isOnLeave(): boolean;
    isOnClick(): boolean;
    protected createAnimation(element: HTMLElement): AnimeInstance;
    onEnter(): void;
    onLeave(): void;
    onClick(): void;
}
