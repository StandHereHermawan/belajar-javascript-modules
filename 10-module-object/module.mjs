/**
 * Contoh Module.
 */
export const firstName = "Arief";
export const middleName = "Karditya";
export const lastName = "Hermawan";

export function hello() {
    console.info("Hello! From Guest.");
}

export class Person {
    constructor(name = "Guest") {
        this.name = name;
    }
}
