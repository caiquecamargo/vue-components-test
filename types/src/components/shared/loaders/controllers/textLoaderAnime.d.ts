import anime, { AnimeInstance } from "animejs";
import { Anime } from "../../../../controllers/Anime";
export declare class TextLoaderAnime extends Anime {
    protected _animation: AnimeInstance;
    constructor(element: HTMLElement);
    static prepareLettersToAnimate(element: HTMLElement): HTMLElement;
    createAnimation(element: HTMLElement): anime.AnimeInstance;
}
