import IQueue from "./interfaces/IQueue";
class Queue<ElemType> implements IQueue<ElemType> {
  private queue: ElemType[];

  constructor(q?: ElemType[]) {
    this.queue = q || [];
  }
  public clear(): void {
    this.queue = [];
  }
  public enqueue(elem: ElemType): void {
    this.queue.unshift(elem);
  }
  public dequeue(): undefined | ElemType {
    if (this.isEmpty) {
      return undefined;
    }
    return this.queue.pop();
  }
  public peek(): undefined | ElemType {
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
