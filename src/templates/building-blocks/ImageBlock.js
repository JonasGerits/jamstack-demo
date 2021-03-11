import React, { Component } from 'react';
import Img from "gatsby-image";

class ImageBlock extends Component {
  render() {
    return (
      <div className="sheet__gallery">
      <Img fluid={this.props.block.image.fluid} />
    </div>
    );
  }
}

export default ImageBlock;