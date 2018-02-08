'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzymeAdapterReact = require('enzyme-adapter-react-15');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _IconTest = require('../../lib/IconTest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars
/* global expect */
_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

function init() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document !== 'undefined') return;
  var JSDOM = require('jsdom').JSDOM;
  var html = '<!DOCTYPE html><html><head></head><body></body></html>';
  var dom = new JSDOM(options.markup || html);
  global.window = dom.window;
  global.document = dom.window.document;
  global.navigator = {
    userAgent: 'node.js'
  };
}
init();

describe('unit::component::Icon', function () {

  context('mount', function () {

    it('should find a single .whatever-name class', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_IconTest.Icon, { className: 'whatever-name' }));
      (0, _chai.expect)(wrapper.find('.whatever-name').length).to.eql(1);
    });

    it('should have exact html', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_IconTest.Icon, { className: 'whatever-name' }));
      (0, _chai.expect)(wrapper.html()).to.equal('<span class="whatever-name"></span>');
    });

    it('should filter a single .whatever-name class', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_IconTest.Icon, { className: 'whatever-name' }));
      (0, _chai.expect)(wrapper.filter('.whatever-name').length).to.eql(1);
    });

    it('should find a single span element', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_IconTest.Icon, null));
      (0, _chai.expect)(wrapper.find('span').length).to.equal(1);
    });

    it('should find a single span.whatever-name ', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_IconTest.Icon, { className: 'whatever-name' }));
      (0, _chai.expect)(wrapper.find('span.whatever-name').length).to.eql(1);
    });

    it('should debug find .whatever-name class', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_IconTest.Icon, { className: 'whatever-name' }));
      console.log('html', wrapper.html());
      wrapper.find('.whatever-name').map(function (el, i) {
        return console.log('find.map[%s]: %s', i, el.html());
      });
    });
  });

  context('shallow', function () {
    it('should find a single .whatever-name class', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_IconTest.Icon, { className: 'whatever-name' }));
      (0, _chai.expect)(wrapper.find('.whatever-name').length).to.eql(1);
    });
  });

  xcontext('render', function () {
    it('should find a single .whatever-name class', function () {
      var $ = (0, _enzyme.render)(_react2.default.createElement(_IconTest.Icon, { className: 'whatever-name' }));
      console.log('$', $);
      console.log('html', $.html());
      (0, _chai.expect)($.find('.whatever-name').length).to.eql(1);
    });
  });
});

describe('unit::component::Icon2', function () {

  context('mount', function () {
    it('should find two .whatever-name class in Icon2', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_IconTest.Icon2, { className: 'whatever-name' }));
      (0, _chai.expect)(wrapper.find('.whatever-name').length).to.eql(2);
    });
  });

  context('shallow', function () {
    it('should find a single .whatever-name class', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_IconTest.Icon2, { className: 'whatever-name' }));
      (0, _chai.expect)(wrapper.find('.whatever-name').length).to.eql(2);
    });
  });
});
