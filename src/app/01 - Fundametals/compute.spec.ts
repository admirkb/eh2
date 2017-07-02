import { compute } from './compute';

describe("compute", () => {

    it("Will return 0 if negative", () => {

        const res = compute(-1);
        expect(res).toBe(0);

    })

    it("Will return positive if positive", () => {

        const res = compute(-1);
        expect(res).toBeGreaterThanOrEqual(0);

    })

    it("Will return 1 greater than number", () => {

        const res = compute(23);
        expect(res).toBe(24);

    })

    it("Tests are great, but we want more time to develop them", () => {
        expect(1).toBe(1);
    })
    
    it("Tests are great, gives developers confidence", () => {
        expect(1).toBe(1);
    })
})
