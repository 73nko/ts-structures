import IQueue from "./interfaces/IQueue";

class PriorityQueue {}

export default PriorityQueue;

// function createPriorityQueue() {
//   const highPriorityQueue = createQueue();
//   const lowPriorityQueue = createQueue();

//   return {
//     enqueue(item, isHighPriority = false) {
//       const queue = isHighPriority ? highPriorityQueue : lowPriorityQueue;
//       queue.enqueue(item);
//     },
//     dequeue() {
//       if (!highPriorityQueue.isEmpty()) {
//         return highPriorityQueue.dequeue();
//       }

//       return lowPriorityQueue.dequeue();
//     },
//     peek() {
//       if (!highPriorityQueue.isEmpty()) {
//         return highPriorityQueue.peek();
//       }

//       return lowPriorityQueue.peek();
//     },
//     get length() {
//       return highPriorityQueue.length + lowPriorityQueue.length;
//     },
//     isEmpty() {
//       return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
//     }
//   };
// }
