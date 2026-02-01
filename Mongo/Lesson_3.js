const session = db.getMongo().startSession();
session.startTransaction();

try {
    const originalTxId = ObjectId("...");
    const amount = 100;

    // 1. Fetch original transaction
    const originalTx = db.transactions.findOne(
        { _id: originalTxId, status: "completed" },
        { session }
    );

    if (!originalTx) {
        throw new Error("Original transaction not found or already refunded");
    }

    // 2. Ensure recipient has enough balance to refund
    const recipient = db.users.findOne(
        { _id: originalTx.to },
        { session }
    );

    if (recipient.balance < amount) {
        throw new Error("Recipient has insufficient balance for refund");
    }

    // 3. Add money back to sender
    db.users.updateOne(
        { _id: originalTx.from },
        { $inc: { balance: amount } },
        { session }
    );

    // 4. Subtract money from recipient
    db.users.updateOne(
        { _id: originalTx.to },
        { $inc: { balance: -amount } },
        { session }
    );

    // 5. Update original transaction status
    db.transactions.updateOne(
        { _id: originalTxId },
        { $set: { status: "refunded", refundedAt: new Date() } },
        { session }
    );

    // 6. Log refund transaction
    db.transactions.insertOne(
        {
            from: originalTx.to,
            to: originalTx.from,
            amount: amount,
            date: new Date(),
            status: "refund",
            referenceTransaction: originalTxId
        },
        { session }
    );

    // 7. Commit
    session.commitTransaction();

} catch (e) {
    session.abortTransaction();
    throw e;
} finally {
    session.endSession();
}
