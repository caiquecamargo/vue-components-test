import anime, { AnimeInstance } from "animejs";
import { Anime } from "../../../../controllers/Anime";
export declare class PageLoaderAnime extends Anime {
    protected _animation: AnimeInstance;
    constructor(element: HTMLElement);
    createAnimation(element: HTMLElement): anime.AnimeTimelineInstance;
}
