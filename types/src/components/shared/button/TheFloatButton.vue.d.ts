import type { AnimationController, AnimeMenu } from '../../..';
import type { DefineComponent, Ref, ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, Slot, ComponentPublicInstance, ComponentOptionsBase, ComponentOptionsMixin, DebuggerEvent, ReactiveEffect, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties, ComputedRef, EmitsOptions } from 'vue';
import { AnimationFloatController } from "./controllers/AnimationFloatController";
declare const _default: DefineComponent<{}, {
    floatMenu: Ref<({
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<{} & {} & {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "click-outside", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<{} & {} & {}>, {
            animationController: AnimationController<AnimeMenu>;
            navMenu: Ref<HTMLElement>;
            closeOnClickOutside: (event: Event) => void;
        }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click-outside"[], string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: ReactiveEffect<any>;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<{} & {} & {}> & ShallowUnwrapRef<{
        animationController: AnimationController<AnimeMenu>;
        navMenu: Ref<HTMLElement>;
        closeOnClickOutside: (event: Event) => void;
    }> & {} & {} & ComponentCustomProperties) | undefined>;
    floatButton: Ref<HTMLElement | undefined>;
    animationController: AnimationFloatController;
    swapState: () => Promise<void>;
    isOpen: ComputedRef<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, EmitsOptions, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
