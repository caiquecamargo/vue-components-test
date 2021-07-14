import { Provider } from "../controllers/Provider";
export declare abstract class State<T extends Record<string, unknown>> extends Provider {
    protected _state: T;
    constructor(name: Symbol);
    protected abstract data(): T;
    get state(): T;
}
