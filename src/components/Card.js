import React from 'react';
import PropTypes from 'prop-types';
import './Card.sass';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      root: 'Card',
      inner: 'inner',
    };
    this.themes = {};
  }

  render() {
    return (
      <div className={[this.classes.root, this.props.className].join(' ')} style={this.props.themes.root}>
        <div className={this.classes.inner} style={this.props.themes.inner}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  themes: {},
  className: '',
};

Card.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
};

export default Card;
