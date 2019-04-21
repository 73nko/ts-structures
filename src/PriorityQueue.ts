import IQueue from "./interfaces/IQueue";
import Queue from "./Queue";

class PriorityQueue<ElemType> implements IQueue<ElemType> {
  private highPriorityQueue: Queue<ElemType>;
  private lowPriorityQueue: Queue<ElemType>;

  constructor(lowQueue?: ElemType[], highQueue?: ElemType[]) {
    this.highPriorityQueue = new Queue(highQueue || []);
    this.lowPriorityQueue = new Queue(lowQueue || []);
  }

  public clear(): void {
    this.highPriorityQueue = new Queue([]);
    this.lowPriorityQueue = new Queue([]);
  }

  public enqueue(elem: ElemType, isHighPriority: Boolean): void {
    const queue = isHighPriority
      ? this.highPriorityQueue
      : this.lowPriorityQueue;
    queue.enqueue(elem);
  }

  public dequeue(): ElemType | undefined {
    if (!this.highPriorityQueue.isEmpty) {
      return this.highPriorityQueue.dequeue();
    }

    return this.lowPriorityQueue.dequeue();
  }

  public peek(): ElemType | undefined {
    if (!this.highPriorityQueue.isEmpty) {
      return this.highPriorityQueue.peek();
    }

    return this.lowPriorityQueue.peek();
  }

  get length(): number {
    return this.highPriorityQueue.length + this.lowPriorityQueue.length;
  }
  get isEmpty(): boolean {
    return this.highPriorityQueue.isEmpty && this.lowPriorityQueue.isEmpty;
  }
}

export default PriorityQueue;
