import IQueue from "./interfaces/IQueue";
class Queue<T> implements IQueue<T> {
  private queue: T[];

  constructor(q?: T[]) {
    this.queue = q || [];
  }
  public clear(): void {
    this.queue = [];
  }
  public enqueue(elem: T): void {
    this.queue.unshift(elem);
  }
  public dequeue(): undefined | T {
    if (this.isEmpty) {
      return undefined;
    }
    return this.queue.pop();
  }
  public peek(): undefined | T {
    if (this.isEmpty) {
      return undefined;
    }
    return this.queue[this.length - 1];
  }
  get length(): number {
    return this.queue.length;
  }
  get isEmpty(): boolean {
    return this.queue.length === 0;
  }
}

export default Queue;
