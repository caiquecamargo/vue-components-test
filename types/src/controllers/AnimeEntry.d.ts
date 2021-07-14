import anime, { AnimeInstance, AnimeParams } from "animejs";
import { Anime } from "./Anime";
export declare type EntryAnimationType = "from-left" | "from-right" | "from-top" | "from-bottom" | "surge";
export declare class AnimeEntry extends Anime {
    protected _animation: anime.AnimeInstance | anime.AnimeTimelineInstance;
    constructor(element: HTMLElement, type: EntryAnimationType, params?: AnimeParams);
    protected createAnimation(element: HTMLElement, type: EntryAnimationType, params?: AnimeParams): AnimeInstance;
}
