// https://jasmine.github.io/2.0/introduction.html#section-Spies

// xdescribe - don't run this
// fdescribe - only run this
describe('hellotest', () => {

    let expected = '';
    let notExpected = '';
    let expectMatch = null;

    beforeEach(() => {
      expected = 'hellotest';
      notExpected = 'hellotest123';
      expectMatch = new RegExp(/^hello/);
    });

    afterEach(() => {
      expected = '';
      notExpected = '';
    });

    // Old school way
    it('check if helltest is hellotest',
      function() {
        expect('hellotest').toBe(expected);
      }
    );

    // ES6 arrows
    it('check if helltest is hellotest',
      () => expect('hellotest').toBe(expected)
    );

    it('check if helltest is NOT hellotest',
      () => expect('hellotest').not.toBe(notExpected)
    );

    it('check if hellotest starts with hello',
      () => expect('hellotest').toMatch(expectMatch)
    );

    it('check if hellotest starts with hello',
      () => expect('hellotest').toMatch(/^hello/)
      // toContain("hello");

    );

});
