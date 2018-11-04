import React from 'react';
import PropTypes from 'prop-types';
import './AsideMenu.sass';
import Icon from './Icon';
import Text from './Text';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class AsideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.classes = {
      root: 'AsideMenu',
      menu: 'menu',
      open: '-open',
      overlay: 'overlay',
      list: 'list',
    };
    this.themes = {};
  }

  onClickOverlay() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let classes = [this.classes.root, this.props.className];
    if (this.props.open !== this.state.open) {
      classes.push(this.classes.open);
    }
    classes = classes.join(' ');
    return (
      <div className={classes} style={this.themes.root}>
        <div className={this.classes.menu} onClick={this.onClickOverlay.bind(this)}>
          {this.props.children}
        </div>
        <div className={this.classes.overlay} onClick={this.onClickOverlay.bind(this)} />
      </div>
    );
  }
}

AsideMenu.defaultProps = {
  themes: {},
  className: '',
  open: false,
};

AsideMenu.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
  open: PropTypes.bool,
};

export default AsideMenu;
