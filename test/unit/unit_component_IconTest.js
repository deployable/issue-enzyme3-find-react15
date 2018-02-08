/* global expect */
import { expect } from 'chai'
import React from 'react' // eslint-disable-line no-unused-vars
import Adapter from 'enzyme-adapter-react-15'
import enzyme, { shallow, render, mount } from 'enzyme'
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


import { Icon, Icon2 } from '../../src/IconTest'


describe('unit::component::Icon', function(){

  context('mount', function(){

    it('should find a single .whatever-name class', function(){
      const wrapper = mount(<Icon className='whatever-name' />)
      expect( wrapper.find('.whatever-name').length ).to.eql(1)
    })


    it('should have exact html', function(){
      const wrapper = mount(<Icon className='whatever-name' />)
      expect( wrapper.html() ).to.equal('<span class="whatever-name"></span>')
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

    it('should debug find .whatever-name class', function(){
      const wrapper = mount(<Icon className='whatever-name' />)
      console.log('html', wrapper.html())
      wrapper.find('.whatever-name').map((el,i) => console.log('find.map[%s]: %s', i, el.html()))
    })

  })

  context('shallow', function(){
    it('should find a single .whatever-name class', function(){
      const wrapper = shallow(<Icon className='whatever-name' />)
      expect( wrapper.find('.whatever-name').length ).to.eql(1)
    })
  })

  xcontext('render', function(){
    it('should find a single .whatever-name class', function(){
      const $ = render(<Icon className='whatever-name' />)
      console.log('$', $)
      console.log('html', $.html())
      expect( $.find('.whatever-name').length ).to.eql(1)
    })
  })

})

describe('unit::component::Icon2', function(){

  context('mount', function(){
    it('should find two .whatever-name class in Icon2', function(){
      const wrapper = mount(<Icon2 className='whatever-name' />)
      expect( wrapper.find('.whatever-name').length ).to.eql(2)
    })
  })

  context('shallow', function(){
    it('should find a single .whatever-name class', function(){
      const wrapper = shallow(<Icon2 className='whatever-name' />)
      expect( wrapper.find('.whatever-name').length ).to.eql(2)
    })
  })

})

