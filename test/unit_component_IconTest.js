/* global expect */
import { expect } from 'chai'
import React from 'react' // eslint-disable-line no-unused-vars
import Adapter from 'enzyme-adapter-react-15'
import enzyme, { mount } from 'enzyme'

const debug = require('debug')('gh:test:unit:component:Icon')
enzyme.configure({ adapter: new Adapter() })

function init( options = {} ){
    if (typeof document !== 'undefined') return
    const JSDOM = require('jsdom').JSDOM
    let html = '<!DOCTYPE html><html><head></head><body></body></html>'
    let dom = new JSDOM(options.markup || html)
    global.window = dom.window
    global.document = dom.window.document
    global.navigator = {
      userAgent: 'node.js'
    }
}
init()


import { Icon } from '../src/IconTest'


describe('unit::components::Icon', function(){

  it('should have exact html', function(){
    const wrapper = mount(<Icon className='whatever-name' />)
    expect( wrapper.html() ).to.equal('<span class="whatever-name"></span>')
  })

  it('should find a single .whatever-name class', function(){
    const wrapper = mount(<Icon className='whatever-name' />)
    expect( wrapper.find('.whatever-name').length ).to.eql(1)
  })

  it('should filter a single .whatever-name class', function(){
    const wrapper = mount(<Icon className='whatever-name' />)
    expect( wrapper.filter('.whatever-name').length ).to.eql(1)
  })

  it('should find a single span element', function(){
    const wrapper = mount(<Icon />)
    expect( wrapper.find('span').length ).to.equal(1)
  })

  it('should find a single span.whatever-name ', function(){
    const wrapper = mount(<Icon className='whatever-name' />)
    expect( wrapper.find('span.whatever-name').length ).to.eql(1)
  })

  it('should debug find a single .whatever-name class', function(){
    const wrapper = mount(<Icon className='whatever-name' />)
    debug(wrapper.html())
    wrapper.find('.whatever-name').map((el,i) => debug(i, el.html()))
  })

})
