import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
declare const _default: DefineComponent<{
    active: {
        type: StringConstructor;
        default: string;
    };
    notActive: {
        type: StringConstructor;
        default: string;
    };
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    active?: unknown;
    notActive?: unknown;
    isActive?: unknown;
} & {
    active: string;
    notActive: string;
    isActive: boolean;
} & {}>, {
    active: string;
    notActive: string;
    isActive: boolean;
}>;
export default _default;
