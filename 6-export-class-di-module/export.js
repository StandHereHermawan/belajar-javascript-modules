/**
 * Export Class di module
 */
export class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.info(`Hello ${name}! my name is ${this.name}`);
    }
}
