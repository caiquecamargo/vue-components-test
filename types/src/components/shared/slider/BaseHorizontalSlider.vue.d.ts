import type { DefineComponent, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { SliderType } from "./controller/HorizontalSlider";
declare const _default: DefineComponent<{
    visibleElements: {
        type: NumberConstructor;
    };
}, {
    container: Ref<HTMLElement | undefined>;
    turn: (to: SliderType) => void;
    onTouchStart: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    enableControllers: Ref<boolean>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    visibleElements?: unknown;
} & {} & {
    visibleElements?: number | undefined;
}>, {}>;
export default _default;
