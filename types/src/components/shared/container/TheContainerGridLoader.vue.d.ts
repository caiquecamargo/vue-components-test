import type { DefineComponent, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, PropType } from 'vue';
import { IContainerGridModel } from '../../../models/IContainerGridModel';
declare const _default: DefineComponent<{
    items: {
        type: PropType<IContainerGridModel[]>;
        default: never[];
    };
    hasMore: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    calcDelay: (index: number) => number;
    loadMore: () => void;
    container: Ref<HTMLElement | undefined>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "loadMore"[], "loadMore", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    items?: unknown;
    hasMore?: unknown;
} & {
    items: IContainerGridModel[];
    hasMore: boolean;
} & {}>, {
    items: IContainerGridModel[];
    hasMore: boolean;
}>;
export default _default;
