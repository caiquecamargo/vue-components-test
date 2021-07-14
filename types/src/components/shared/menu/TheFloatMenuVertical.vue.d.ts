import type { DefineComponent, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { AnimeMenu } from "./controllers/AnimeMenu";
import { AnimationController } from "../../../controllers/AnimationController";
declare const _default: DefineComponent<{}, {
    animationController: AnimationController<AnimeMenu>;
    navMenu: Ref<HTMLElement>;
    closeOnClickOutside: (event: Event) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click-outside"[], "click-outside", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
