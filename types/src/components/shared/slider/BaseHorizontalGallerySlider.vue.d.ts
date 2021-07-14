import type { DefineComponent, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { SliderType } from "./controller/HorizontalSlider";
declare const _default: DefineComponent<{
    visibleElements: {
        type: NumberConstructor;
    };
    resizeEvent: {
        type: ObjectConstructor;
    };
}, {
    container: Ref<HTMLElement | undefined>;
    turn: (to: SliderType) => void;
    onTouchStart: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    init: () => void;
    enableControllers: Ref<boolean>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    visibleElements?: unknown;
    resizeEvent?: unknown;
} & {} & {
    visibleElements?: number | undefined;
    resizeEvent?: Record<string, any> | undefined;
}>, {}>;
export default _default;
