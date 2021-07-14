import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
import { ISrcset } from "./model/ISrcset";
declare const _default: DefineComponent<{
    alt: {
        type: StringConstructor;
        default: string;
    };
    srcset: {
        type: PropType<ISrcset>;
        required: true;
    };
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    alt?: unknown;
    srcset?: unknown;
} & {
    alt: string;
    srcset: ISrcset;
} & {}>, {
    alt: string;
}>;
export default _default;
