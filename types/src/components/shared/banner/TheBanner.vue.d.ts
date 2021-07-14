import type { DefineComponent, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
import { ISrcset } from "../image/model/ISrcset";
declare const _default: DefineComponent<{
    srcset: {
        type: PropType<ISrcset>;
        required: true;
    };
    alt: {
        type: StringConstructor;
    };
}, {
    banner: Ref<HTMLElement>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    srcset?: unknown;
    alt?: unknown;
} & {
    srcset: ISrcset;
} & {
    alt?: string | undefined;
}>, {}>;
export default _default;
