import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
import { ISrcset } from "./model/ISrcset";
declare const _default: DefineComponent<{
    srcset: {
        type: PropType<ISrcset>;
    };
    src: {
        type: StringConstructor;
    };
    alt: {
        type: StringConstructor;
        required: true;
    };
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    srcset?: unknown;
    src?: unknown;
    alt?: unknown;
} & {
    alt: string;
} & {
    srcset?: ISrcset | undefined;
    src?: string | undefined;
}>, {}>;
export default _default;
