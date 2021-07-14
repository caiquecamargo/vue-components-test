import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
declare const _default: DefineComponent<{
    page: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}, {
    siteName: string | boolean | undefined;
    path: string;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    page?: unknown;
    description?: unknown;
} & {
    description: string;
    page: string;
} & {}>, {
    description: string;
    page: string;
}>;
export default _default;
