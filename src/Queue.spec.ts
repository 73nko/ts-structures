import Queue from "./Queue";

describe("Testing Queue:", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it("A new empty queue has been created", () => {
    expect(queue.length).toBe(0);
  });
});
