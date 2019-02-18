/**
 * The following strategy of importing modules allows the tests to be run in a browser environment.
 * Test libraries like `mocha`, `sinon`, etc. are expected to be loaded before this file.
 */
var sinon = sinon || require('sinon');
var chai = chai || require('chai');
var expect = chai.expect;

if (typeof window === 'undefined') {
  require('mocha');
  require('jsdom-global')();
}

// Load libraries that require access to the DOM after `jsdom-global`
var ZawgyiKeyboard = ZawgyiKeyboard || require('../src/zawgyi-keyboard').ZawgyiKeyboard;
var KeyEvent = KeyEvent || require('./libs/key-event');


// Reset ZawgyiKeyboard after each test
afterEach(function () {
  ZawgyiKeyboard.reset();
});

describe('wrapping a specific element', function () {
  // Prepare the DOM for these tests.
  document.body.insertAdjacentHTML('afterbegin', `
    <form style="display: none;">
      <textarea></textarea>
    </form>
  `);

  var form = document.querySelector('form');
  var textarea = form.querySelector('textarea');

  it('z key fires when pressing z in the target element', function () {
    var spy = sinon.spy();
    console.log(ZawgyiKeyboard)
    var zawgyiKeyboard = new ZawgyiKeyboard(textarea)

    zawgyiKeyboard.bind('z', spy);

    KeyEvent.simulate('Z'.charCodeAt(0), 90, [], textarea);

    expect(spy.callCount).to.equal(1, 'callback should fire once');
    expect(spy.args[0][0]).to.be.an.instanceOf(Event, 'first argument should be Event');
    expect(spy.args[0][1]).to.equal('z', 'second argument should be key combo');
  });

});
