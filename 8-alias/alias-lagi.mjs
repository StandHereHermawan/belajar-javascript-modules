/**
 * Alias di Export
 */
const company = "PT. Bank Central Asia .Tbk";

function multiply(first, second) {
    return first * second;
}

class Company {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }
}

export {company , multiply , Company};