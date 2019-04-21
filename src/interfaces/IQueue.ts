interface IQueue<ELemType> {
  clear(): void;
  enqueue(elem: ELemType, isHighPriority?: Boolean): void;
  dequeue(): undefined | ELemType;
  peek(): undefined | ELemType;
  readonly length: number;
  readonly isEmpty: boolean;
}

export default IQueue;
