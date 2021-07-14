import type { DefineComponent, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
import { LocationAsRelativeRaw } from "vue-router";
declare const _default: DefineComponent<{
    to: {
        type: PropType<LocationAsRelativeRaw>;
        required: true;
    };
    active: {
        type: StringConstructor;
        default: string;
    };
    mobileActive: {
        type: StringConstructor;
        default: string;
    };
}, {
    activeClasses: ComputedRef<(string | false)[]>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    to?: unknown;
    active?: unknown;
    mobileActive?: unknown;
} & {
    active: string;
    to: LocationAsRelativeRaw;
    mobileActive: string;
} & {}>, {
    active: string;
    mobileActive: string;
}>;
export default _default;
