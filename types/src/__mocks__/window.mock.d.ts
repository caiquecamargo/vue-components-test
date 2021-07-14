/// <reference types="@types/jest" />
interface Options {
    width: number;
}
export declare function visualViewportMock(options?: Options): VisualViewport;
export declare function mockWindowVisualViewport(options?: Options): jest.SpyInstance<VisualViewport, []>;
export declare function mockWindowIntersectionObserver(): void;
export declare function mockWindowAlert(): void;
export {};
