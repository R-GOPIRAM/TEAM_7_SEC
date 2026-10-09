class GCDCalculator {

    static findGCD(a: number, b: number): number {
        a = Math.abs(a);
        b = Math.abs(b);

        while (b !== 0) {
            const remainder = a % b;
            a = b;
            b = remainder;
        }

        return a;
    }

    static main(): void {
        const a: number = 48;
        const b: number = 18;

        console.log("GCD:", GCDCalculator.findGCD(a, b));
    }
}

GCDCalculator.main();