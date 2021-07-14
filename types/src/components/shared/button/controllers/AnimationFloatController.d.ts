import { AnimationController } from "../../../../controllers/AnimationController";
import { AnimeFloatButton } from "./AnimeFloatButton";
export declare class AnimationFloatController extends AnimationController<AnimeFloatButton> {
    constructor();
    private remaining;
    private isOnCLick;
    private play;
    onMouseEnter(): Promise<void>;
    onMouseLeave: () => Promise<void>;
    onClick: () => void;
}
