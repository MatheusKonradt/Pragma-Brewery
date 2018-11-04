import React from 'react';
import PropTypes from 'prop-types';
import './Grid.sass';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      root: 'Grid',
    };
    this.themes = {};
  }

  render() {
    return (
      <div className={[this.classes.root, this.props.className].join(' ')} style={this.props.themes.root}>
        {this.props.children}
      </div>
    );
  }
}

Grid.defaultProps = {
  themes: {},
  className: '',
};

Grid.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
};

export default Grid;
