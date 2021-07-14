import type { DefineComponent, WritableComputedRef, ComputedRef, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
declare const _default: DefineComponent<{
    disable: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    labelName: {
        type: StringConstructor;
        default: string;
    };
    dataFromParent: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
}, {
    field: WritableComputedRef<string | number>;
    idInput: ComputedRef<string | number>;
    filled: Ref<boolean>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    disable?: unknown;
    type?: unknown;
    labelName?: unknown;
    dataFromParent?: unknown;
    lazy?: unknown;
    required?: unknown;
    height?: unknown;
} & {
    disable: boolean;
    type: string;
    labelName: string;
    dataFromParent: string | number;
    lazy: boolean;
    required: boolean;
    height: string;
} & {}>, {
    disable: boolean;
    type: string;
    labelName: string;
    lazy: boolean;
    required: boolean;
    height: string;
}>;
export default _default;
