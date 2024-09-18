class DiscountCalculator {
    calculate(order: LegacyOrder, customerType: string): number {
        if (customerType === "regular") {
            return order.calculateTotal() * 0.05;
        } else if (customerType === "vip") {
            return order.calculateTotal() * 0.1;
        } else {
            return 0;
        }
    }
}
