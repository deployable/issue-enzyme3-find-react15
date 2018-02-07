import React from 'react'
import debug from 'debug'
import PropTypes from 'prop-types'


export class Icon extends React.Component {

  static debug = debug('gh:component:Icon')

  static propTypes = {
    // Icon to add to the button
    name:       PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    className:  PropTypes.string,
  }

  static defaultProps = {
    name:       false,
  }

  classes(){
    let { name } = this.props

    if ( !name.startsWith('glyphicon') ) name = 'glyphicon-' + name
    let classNames = ['glyphicon', name]
    
    if ( this.props.className !== undefined ) classNames.push(this.props.className)

    return classNames
  }

  render(){
    //if ( name ) return (<span className={this.classes().join(' ')} style={styles}/>)
    return (<span className={this.props.className} />)
  }

}