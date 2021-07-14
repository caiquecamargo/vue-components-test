import type { DefineComponent, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
declare const _default: DefineComponent<{
    hasFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasSecond: {
        type: BooleanConstructor;
        default: boolean;
    };
    major: {
        type: PropType<"First" | "Second">;
        default: string;
        validator: (value: string) => boolean;
    };
}, {
    grid: ComputedRef<{
        "col-span-full": boolean;
    }>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    hasFirst?: unknown;
    hasSecond?: unknown;
    major?: unknown;
} & {
    hasFirst: boolean;
    hasSecond: boolean;
    major: "First" | "Second";
} & {}>, {
    hasFirst: boolean;
    hasSecond: boolean;
    major: "First" | "Second";
}>;
export default _default;
