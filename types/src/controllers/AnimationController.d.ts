import type { Ref } from '@vue/reactivity';
import { Anime } from "./Anime";
export declare enum AnimationState {
    OPENED = 0,
    CLOSED = 1
}
export declare class AnimationController<T extends Anime> {
    protected _animation: T | undefined;
    protected _state: Ref<AnimationState>;
    constructor();
    get state(): AnimationState;
    get animation(): T | undefined;
    get finished(): Promise<void> | undefined;
    set animation(animation: T | undefined);
    protected reverseState(): void;
    isOpened(): boolean;
    isClosed(): boolean;
    protected animate(): Promise<void>;
    open(): Promise<void> | undefined;
    close(): Promise<void> | undefined;
    swap(): Promise<void>;
}
