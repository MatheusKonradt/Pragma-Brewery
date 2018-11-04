import React from 'react';
import PropTypes from 'prop-types';
import './HeaderBar.sass';
import Icon from './Icon';
import AsideMenu from "./AsideMenu";
import Text from "./Text";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asideMenuOpen: false
    };
    this.classes = {
      root: 'HeaderBar',
      asideMenuOpen: '-open',
      asideMenuClosed: '',
      menu: 'menu',
      headerTitle: 'headerTitle'
    };
    this.themes = {};
  }

  onClickIconMenu() {
    this.setState({ asideMenuOpen: !this.state.asideMenuOpen });
  }

  render() {
    return (
      <header className={[this.classes.root, this.props.className].join(' ')} style={this.props.themes.root}>
        <a href="#" onClick={this.onClickIconMenu.bind(this)} className={this.classes.menu} >
          <Icon name="dehaze"/>
        </a>
        <Text variant="h1" className={this.classes.headerTitle}>Pragma Brewery</Text>
        <AsideMenu open={this.state.asideMenuOpen}/>
      </header>
    );
  }
}

HeaderBar.defaultProps = {
  themes: {},
  className: '',
};

HeaderBar.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string,
};

export default HeaderBar;
