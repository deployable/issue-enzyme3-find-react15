import React from 'react'

export class Icon extends React.Component {
  render(){
    return (<span className={this.props.className} />)
  }
}

export class Icon2 extends React.Component {
  render(){
    return (
      <div>
        <span className={this.props.className} />
        <span className={this.props.className} />
      </div>
    )
  }
}
