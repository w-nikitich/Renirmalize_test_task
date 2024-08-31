export type Customer = {
    trackingID: number,
    productImage: string,
    productName: string,
    customer: string,
    date: Date,
    amount: number,
    paymentMode: "Debit Card" | "Cash on Delivery" | "Bank Transfer" | "Credit Card" | "Paypal"
    status: "Cancelled" | "Delivered" | "Process"
}