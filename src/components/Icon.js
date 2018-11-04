import React from 'react';
import PropTypes from 'prop-types';
import './Icon.sass';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      root: 'Icon material-icons',
    };
    this.themes = {};
  }

  render() {
    let classes = [this.classes.root, this.props.className];

    classes.push(`size-${this.props.size}`);

    classes = classes.join(' ');
    return (
      <i className={classes} style={this.props.themes.root}>
        {this.props.name}
      </i>
    );
  }
}

Icon.defaultProps = {
  themes: {},
  className: '',
  size: 24,
};

Icon.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
