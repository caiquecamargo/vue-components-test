import { State } from "../State";
export interface IStateMock extends Record<string, unknown> {
    name: string;
}
export declare class StateMock extends State<IStateMock> {
    constructor();
    protected data(): IStateMock;
}
