import { SimpleCalculator } from "../simpleCalculator.js";

describe ('Capitalize first character', () => {

    it('Exists', () => {
        expect(capitalize).toBeDefined();
    });

    it('Returns a string with a first capital letter', () => {
        expect(capitalize("this")).toEqual("This");
        expect(capitalize("tom")).toEqual("Tom");
    });

    it('Handles empty strings gracefully', () => {
        expect(capitalize("")).toEqual("");
    });

});

describe("Reverse string", () => {
    it("Exists", () => {
        expect(reverseString).toBeDefined();
    });

    it("Reverses a string", () => {
        expect(reverseString("Billy")).toEqual("ylliB");
        expect(reverseString("Melinda")).toEqual("adnileM");
    });

    it("Handles empty strings gracefully", () => {
        expect(reverseString("")).toEqual("");
    });
});

describe("Simple calculator object", () => {
    let calc;

    beforeEach(() => {
        calc = new SimpleCalculator();
    })

    it("Exists", () => {
        expect(SimpleCalculator).toBeDefined();
    })

    it("Contains add, subtract, divide, and multiply functions", () => {
        expect(calc.add).toBeDefined();
        expect(calc.subtract).toBeDefined();
        expect(calc.divide).toBeDefined();
        expect(calc.multiply).toBeDefined();
    });

    it("Adds", () => {
        expect(calc.add(1, 2)).toEqual(3);
        expect(calc.add(3, 5)).toEqual(8);
        expect(calc.add()).toBeUndefined();
    });
    it("Subtracts", () => {
        expect(calc.subtract(2, 1)).toEqual(1);
        expect(calc.subtract(5, 3)).toEqual(2);
        expect(calc.subtract()).toBeUndefined();
    });
    it("Multiplies", () => {
        expect(calc.multiply(2, 1)).toEqual(2);
        expect(calc.multiply(2, 3)).toEqual(6);
        expect(calc.multiply(5, 3)).toEqual(15);
        expect(calc.multiply()).toBeUndefined();
    });
    it("Divides", () => {
        expect(calc.divide(2, 1)).toEqual(2);
        expect(calc.divide(100, 10)).toEqual(10);
        expect(calc.divide()).toBeUndefined();
        expect(calc.divide(5, 0)).toBeUndefined();
    });
});

describe("Casesar cipher function", () => {
    it("Exists", () => {
        expect(caesarCipher).toBeDefined();
    }); 

    it("Ciphers by 1 for lowercase letters", () => {
        expect(caesarCipher("a", 1)).toEqual("b");
        expect(caesarCipher("b", 1)).toEqual("c");
    });

    it("Ciphers by 1 for uppercase letters", () => {
        expect(caesarCipher("A", 1)).toEqual("B");
        expect(caesarCipher("B", 1)).toEqual("C");
    });

    it("Ciphers by 2 for lowercase letters", () => {
        expect(caesarCipher("a", 2)).toEqual("c");
        expect(caesarCipher("b", 2)).toEqual("d");
    });

    it("Ciphers by 2 for uppercase letters", () => {
        expect(caesarCipher("A", 2)).toEqual("C");
        expect(caesarCipher("B", 2)).toEqual("D");
    });

    it("Ciphers an string with both upper and lower case letters", () => {
        expect(caesarCipher("Hello", 1)).toEqual("Ifmmp");
        expect(caesarCipher("Alex", 1)).toEqual("Bmfy");
        expect(caesarCipher("Hello", 2)).toEqual("Jgnnq");
        expect(caesarCipher("Alex", 2)).toEqual("Cngz");
    });

    it("Wraps a single character for lowercase", () => {
        expect(caesarCipher("z", 1)).toEqual("a");
        expect(caesarCipher("z", 2)).toEqual("b");
    });

    it("Wraps a single character for uppercase", () => {
        expect(caesarCipher("Z", 1)).toEqual("A");
        expect(caesarCipher("Z", 2)).toEqual("B");
    });

    it("Wraps for whole strings for upper and lower case", () => {
        expect(caesarCipher("Hello", 24)).toEqual("Fcjjm");
    });

    it("Wraps for whole strings for upper and lower case with shifts greater than 26", () => {
        expect(caesarCipher("Hello", 40)).toEqual("Vszzc");
    });

    it("Preserves punctuation", () => {
        expect(caesarCipher("Hello!", 1)).toEqual("Ifmmp!");
        expect(caesarCipher("Hello!", 2)).toEqual("Jgnnq!");
    });
});

describe("Analyze array for average, min, max, and length", () => {
    it('Exists', () => {
        expect(analyzeArray).toBeDefined();
    });

    it('Returns an average of all numbers in the array', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        let res = analyzeArray(arr);
        
        expect(res.average).toEqual(4.5);

        arr = [5, 10, 15, 20];
        res = analyzeArray(arr);

        expect(res.average).toEqual(12.5);
    });

    it('Averages negative numbers', () => {
        let arr = [-5, 10, 15, 20];
        
        expect(analyzeArray(arr).average).toEqual(10);
    });

    //Template
    it('DOES SOMETHING', () => {

    });
});

function analyzeArray(numArray) {
    let average = undefined;

    let total = numArray.reduce((sum, current) => {
        return sum + current;
    }, 0);

    average = total / numArray.length;
    
    return { 
        average: average, 
        min: 0, 
        max: 0, 
        length: 0
    };
}

function capitalize(str) {
    let upperCase = str;

    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let reversed = "";

    for(let i = -1; Math.abs(i) < str.length + 1; i--) {
        reversed += str.at(i);
    }

    return reversed;
}

function caesarCipher(str, shift) {
    let shiftedString = "";

    const lowercaseWrapLimit = "z".charCodeAt(0);
    const uppercaseWrapLimit = "Z".charCodeAt(0);

    for(let i = 0; i < str.length; i++) {
        let char = str.at(i);

        if(!isALetter(char)) {
            shiftedString += char;
            continue;
        }

        let asciiChar = char.charCodeAt(0);

        asciiChar += shift;

        if(isUppercase(char) && asciiChar > uppercaseWrapLimit) {
            let A = "A".charCodeAt(0);
            
            let wrapped = asciiChar - A;

            asciiChar = A + (wrapped % 26);
        }

        if(!isUppercase(char) && asciiChar > lowercaseWrapLimit) {
            let a = "a".charCodeAt(0); 
            
            let wrapped = (asciiChar - a) % 26;

            asciiChar = a + wrapped;
        }

        shiftedString += String.fromCharCode(asciiChar);
    }

    return shiftedString;
}

function isUppercase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

function isALetter(char) {
    let a = "a".charCodeAt(0);
    let z = "z".charCodeAt(0);
    let A = "A".charCodeAt(0);
    let Z = "Z".charCodeAt(0);

    let charCode = char.charCodeAt(0);

    return (charCode >= a && charCode <= z) || (charCode >= A && charCode <= Z);
}