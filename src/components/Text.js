import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Text.sass';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      root: 'Text',
    };
    this.themes = {};
  }

  render() {
    let classes = [this.classes.root, this.props.className];
    const style = this.props.themes.root;

    if (this.props.bold) classes.push('bold');
    if (this.props.italic) classes.push('italic');

    classes = classes.join(' ');

    switch (this.props.variant) {
      case Text.VARIANTS.SPAN:
        return (<span className={classes} style={style}>{this.props.children}</span>);

      case Text.VARIANTS.P:
        return (<p className={classes} style={style}>{this.props.children}</p>);

      case Text.VARIANTS.H1:
        return (<h1 className={classes} style={style}>{this.props.children}</h1>);

      case Text.VARIANTS.H2:
        return (<h2 className={classes} style={style}>{this.props.children}</h2>);

      case Text.VARIANTS.H3:
        return (<h3 className={classes} style={style}>{this.props.children}</h3>);

      case Text.VARIANTS.H4:
        return (<h4 className={classes} style={style}>{this.props.children}</h4>);

      default:
        return null
    }
  }
}

Text.VARIANTS = {
  SPAN: 'span',
  P: 'p',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
};

Text.defaultProps = {
  themes: {},
  className: '',
};

Text.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
  variant: PropTypes.oneOf(_.map(Text.VARIANTS)),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
};

export default Text;