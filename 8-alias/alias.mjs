/**
 * Alias di Export
 */
const company = "PT. Barito Renewables Energy";

function multiply(first, second) {
    return first * second;
}

class Company {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }
}

export { company as perusahaan, multiply as perkalian, Company as Perusahaan };
