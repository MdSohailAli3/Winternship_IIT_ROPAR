function processTransaction(
  amount: number,
  description: string | undefined,
  isCredit: boolean
): void {
  // If amount is negative, this path never returns
  if (amount < 0) {
    throw new Error("Transaction amount cannot be negative");
  }

  // Handle missing description
  let finalDescription: string =
    description !== undefined ? description : "No description provided";

  // Determine transaction type
  let transactionType: string = isCredit ? "Credit" : "Debit";

  // Print transaction summary
  console.log("Transaction Summary");
  console.log("-------------------");
  console.log("Type:", transactionType);
  console.log("Amount:", amount);
  console.log("Description:", finalDescription);
}

processTransaction(500, "Salary Credit", true);
processTransaction(200, undefined, false);

// This will throw an error (never returns)
// processTransaction(-100, "Invalid", true);
