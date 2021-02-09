import { expect } from "chai";
import "mocha";
import { absPath } from "./utils";

describe("utils", () => {
    describe("absPath", () => {
        it('should construct correct path', () => {
            const uri = 'foo';
            const expected = `${__dirname}/../${uri}`;
            expect(expected).to.equal(absPath(uri));
        });
    });
});
