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
    return (
      <i className={[this.classes.root, this.props.className].join(' ')} style={this.props.themes.root}>
        {this.props.name}
      </i>
    );
  }
}

Icon.defaultProps = {
  themes: {},
  className: '',
};

Icon.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
};

export default Icon;
