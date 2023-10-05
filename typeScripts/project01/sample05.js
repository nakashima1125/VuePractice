"use strict";
class Address {
    constructor(zip) {
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
        this.zip = zip;
    }
    getAddress() {
        let here = this.addresses[this.zip];
        return `${here.prefecture} ${here.city}`;
    }
    getZip() {
        return this.zip;
    }
}
let myAddress = new Address("079-1100");
console.log(myAddress.getAddress());
