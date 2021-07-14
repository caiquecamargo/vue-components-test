import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
declare const _default: DefineComponent<{
    description: {
        type: StringConstructor;
    };
    image: {
        type: StringConstructor;
    };
    imageGallery: {
        type: PropType<string[]>;
    };
}, {
    changeImage: (index: number) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "change-image"[], "change-image", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    description?: unknown;
    image?: unknown;
    imageGallery?: unknown;
} & {} & {
    description?: string | undefined;
    image?: string | undefined;
    imageGallery?: string[] | undefined;
}>, {}>;
export default _default;
