import anime, { AnimeInstance } from "animejs";
import { Anime } from "../../../../controllers/Anime";
export declare class AnimeSandwich extends Anime {
    protected _animation: anime.AnimeInstance | anime.AnimeTimelineInstance;
    constructor(element: HTMLElement);
    protected createAnimation(element: HTMLElement): AnimeInstance;
}
