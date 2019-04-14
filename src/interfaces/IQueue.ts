interface IQueue<T> {
  clear(): void;
  enqueue(elem: T): void;
  dequeue(): undefined | T;
  peek(): undefined | T;
  readonly length: number;
  readonly isEmpty: boolean;
}

export default IQueue;
