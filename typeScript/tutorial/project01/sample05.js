"use strict";
// // このフォーマットに従えというもの
// interface AddressFormat {
//   zip: string;
//   prefecture: string;
//   city: string;
// }
// class Address implements AddressFormat {
class Address {
    // public zip2;
    // public prefecture2;
    // public city2;
    constructor(_zip) {
        this._zip = _zip;
        this.addresses = {
            "079-1100": {
                prefecture: "北海道",
                city: "赤平市",
            },
            "038-0000": {
                prefecture: "青森県",
                city: "青森市",
            },
        };
    }
    set zip(value) {
        this._zip = value;
    }
    get zip() {
        return this._zip.substr(0, 3);
    }
    getAddress() {
        let here = this.addresses[this._zip];
        return `${here.prefecture} ${here.city}`;
    }
    getZip() {
        return this._zip;
    }
}
let myAddress = new Address("079-1100");
myAddress.zip = "111-1111";
// console.log(myAddress.getAddress());
console.log(myAddress.zip);
console.log(myAddress.addresses);
