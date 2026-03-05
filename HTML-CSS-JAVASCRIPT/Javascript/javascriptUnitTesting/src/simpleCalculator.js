export class SimpleCalculator {
    add(x, y) {
        if(!x) return undefined;
        if(!y) return undefined;

        return x + y;
    }

    subtract(x, y) {
        if(!x) return undefined;
        if(!y) return undefined;
        return x - y;
    }

    multiply(x, y) {
        if(!x) return undefined;
        if(!y) return undefined;
        return x * y;
    }

    divide(x, y) {
        if(!x) return undefined;
        if(!y) return undefined;

        if(y === 0) return undefined;

        return x / y; 
    }
}