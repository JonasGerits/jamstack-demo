import React, { Component } from 'react';

class ParagraphBlock extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.block.contentNode.childMarkdownRemark.html}}></div>
    );
  }
}

export default ParagraphBlock;