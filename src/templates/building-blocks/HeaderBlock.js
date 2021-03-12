import React, { Component } from 'react';

class HeaderBlock extends Component {
  render() {
    return (
        <div dangerouslySetInnerHTML={{__html: this.createHeader()}}></div>
    );
  }

  createHeader() {
      return '<h' + this.props.block.level + '>' + this.props.block.title + '</h' + this.props.block.level + '>'
  }
}

export default HeaderBlock;