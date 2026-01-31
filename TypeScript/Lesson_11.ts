// 1. Data Initialization
type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};

type TransactionType = Transaction["type"];

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "checkout" },
  { id: 5, type: "priority" },
  { id: 6, type: "return" }
];

const inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2
};

const visitors: string[] = ["Alice", "Bob", "Carol", "Dave"];

// 2. Count Transactions (for loop)
const transactionCounts: Record<TransactionType, number> = {
  checkout: 0,
  return: 0,
  cancelled: 0,
  priority: 0
};

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  transactionCounts[tx.type]++;
}

console.log("Transaction Counts:", transactionCounts);

// 3. Infinite while loop with break
let index = 0;

while (true) {
  const tx = transactions[index];

  if (!tx) {
    console.log("No more transactions.");
    break;
  }

  if (tx.type === "priority") {
    console.log(`Priority transaction ${tx.id} found. Stopping.`);
    break;
  }

  console.log(`Processed transaction ${tx.id}`);
  index++;
}

// 4. do…while with dynamic queue
let returnQueue: Transaction[] =
  transactions.filter(tx => tx.type === "return");

let processedReturns = 0;

do {
  const tx = returnQueue.shift();

  if (tx) {
    console.log(`Processing return transaction ${tx.id}`);
    processedReturns++;
  }

// simulate a new return arriving dynamically
  if (processedReturns === 1) {
    returnQueue.push({ id: 99, type: "return" });
  }

} while (returnQueue.length > 0);

console.log("Total returns processed:", processedReturns);

// 5. Reset inventory using for…in
for (const book in inventory) {
  inventory[book] = 0;
}

console.log("Inventory after reset:", inventory);

// 6. Display visitors in reverse (for…of)
for (const visitor of [...visitors].reverse()) {
  console.log(`Welcome, ${visitor}`);
}