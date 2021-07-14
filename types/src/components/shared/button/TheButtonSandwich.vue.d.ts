import type { DefineComponent, Ref, ComponentOptionsMixin, EmitsOptions, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { AnimationController } from "../../../controllers/AnimationController";
import { AnimeSandwich } from "./controllers/AnimeSandwich";
declare const _default: DefineComponent<{}, {
    button: Ref<HTMLElement>;
    animationController: AnimationController<AnimeSandwich>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, EmitsOptions, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
