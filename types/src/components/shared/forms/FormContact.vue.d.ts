import type { DefineComponent, Ref, ComponentOptionsMixin, EmitsOptions, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
declare const _default: DefineComponent<{}, {
    name: Ref<string>;
    email: Ref<string>;
    telephone: Ref<string>;
    description: Ref<string>;
    sendMessage: () => Promise<void>;
    form: Ref<unknown>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, EmitsOptions, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
