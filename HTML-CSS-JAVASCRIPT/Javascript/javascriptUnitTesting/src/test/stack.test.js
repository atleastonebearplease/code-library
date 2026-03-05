class Stack {

    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        let popped = this.items[this.top];
        delete this.items[this.top]
        this.top -= 1;

        return popped;
    }
};

describe('My Stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        expect(stack.top).toEqual(-1);
        expect(stack.items).toEqual({});
    })

    it('can push to the top', () => {
        stack.push('avocado');
        expect(stack.top).toEqual(0);
        expect(stack.peek).toEqual('avocado');
    });

    it('can pop off', () => {
        stack.push('avocado');
        let popped = stack.pop();
        expect(stack.top).toEqual(-1);
        expect(popped).toEqual('avocado');

        stack.push('broccoli');
        popped = stack.pop();
        expect(popped).toEqual('broccoli');

    });

});