import React from 'react';
import PropTypes from 'prop-types';
import './Grid.sass';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      root: 'GridItem',
      inner: 'inner',
    };
    this.themes = {};
  }

  render() {
    const xsClass = `xs-${this.props.xs}`;
    const ysClass = `ys-${this.props.ys}`;
    const vaClass = `va-${this.props.va}`;
    return (
      <div className={[this.classes.root, xsClass, ysClass, vaClass, this.props.className].join(' ')} style={this.props.themes.root}>
        {this.props.children}
      </div>
    );
  }
}

GridItem.defaultProps = {
  themes: {},
  className: '',
  xs: 12,
  ys: 12,
  va: 'top',
};

GridItem.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  ys: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  va: PropTypes.oneOf(['top', 'middle', 'bottom']),
};

export default GridItem;
