import Queue from "./Queue";

describe("Testing Queue:", () => {
  test("A new empty queue has been created", () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
  });
});
