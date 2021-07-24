import { mockWindowVisualViewport } from "../../__mocks__/window.mock";
import { optimizedScrollEvent } from "../optimizedScrollEvent";

describe("OptmizedResizeEvent suit test", () => {
  it("should throws an callback if the resizeEvent is throw.", async () => {
    const obj = {
      fn: () => {},
      fntwo: () => {},
    };

    const fnSpy = jest.spyOn(obj, "fn");
    mockWindowVisualViewport();

    optimizedScrollEvent.add(obj.fn);
    optimizedScrollEvent.add(obj.fntwo);
    optimizedScrollEvent["scroll"]();
    optimizedScrollEvent["scroll"]();

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    await sleep(1000);
    expect(fnSpy).toHaveBeenCalled();
  });
});
