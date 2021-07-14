import { InjectionKey } from "@vue/runtime-core";
export declare abstract class Provider {
    protected _name: InjectionKey<this>;
    constructor(name: Symbol);
    provide(): void;
    get name(): InjectionKey<this>;
}
