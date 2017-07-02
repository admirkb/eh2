import { getCurrencies } from './currencies';

describe("Currency Validation", () => {

    it("Will return supported currencies", () => {

        const res = getCurrencies();
        expect(res).toContain("GBP");
        expect(res).toContain("EUR");
        expect(res).toContain("USD");

    })


})
