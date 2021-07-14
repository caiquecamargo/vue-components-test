import { AnimeInstance } from "animejs";
export declare enum Direction {
    NORMAL = "normal",
    REVERSE = "reverse"
}
export declare abstract class Anime {
    protected abstract _animation: AnimeInstance;
    constructor();
    protected abstract createAnimation(element: HTMLElement | HTMLElement[], ...args: unknown[]): AnimeInstance;
    get animation(): AnimeInstance;
    set animation(animation: AnimeInstance);
    animate(): Promise<void>;
    stop(): void;
    reverse(): this;
    setDirection(direction: Direction): this;
}
