import React from 'react';
import PropTypes from 'prop-types';
import './AsideMenu.sass';

class AsideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.classes = {
      root: 'AsideMenu',
      menu: 'menu',
      open: '-open',
      overlay: 'overlay',
    };
    this.themes = {};
  }

  render() {
    let classes = [this.classes.root, this.props.className];
    if (this.props.open) {
      classes.push(this.classes.open);
    }
    classes = classes.join(' ');
    return (
      <div className={classes} style={this.props.themes.root}>
        <div className={this.classes.menu}>
          {this.props.children}
        </div>
        <div className={this.classes.overlay}>
        </div>
      </div>
    );
  }
}

AsideMenu.defaultProps = {
  themes: {},
  className: '',
  open: false
};

AsideMenu.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
  open: PropTypes.bool
};

export default AsideMenu;