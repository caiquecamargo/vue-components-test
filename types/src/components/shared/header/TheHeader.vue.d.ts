import type { DefineComponent, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
declare const _default: DefineComponent<{
    changeWhenOffTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    offTopSize: {
        type: NumberConstructor;
        default: number;
    };
    offTopClass: {
        type: StringConstructor;
        default: string;
    };
}, {
    mobile: Ref<boolean>;
    header: Ref<HTMLElement>;
    close: typeof close;
    isOffTop: (scroll: number) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    changeWhenOffTop?: unknown;
    offTopSize?: unknown;
    offTopClass?: unknown;
} & {
    changeWhenOffTop: boolean;
    offTopSize: number;
    offTopClass: string;
} & {}>, {
    changeWhenOffTop: boolean;
    offTopSize: number;
    offTopClass: string;
}>;
export default _default;
