import loadBlocks from './blocks';
import loadComponents from './components';
import {
  hNavbarRef
} from './consts';

export default grapesjs.plugins.add('grapesjs-slick', (editor, opts = {}) => {
  let config = opts;

  let defaults = {
    blocks: [hNavbarRef],
    defaultStyle: 1,
    navbarClsPfx: 'navbar',
    labelNavbar: 'S Carousel',
    labelNavbarContainer: 'Carousel Container',
    labelMenu: 'Navbar Menu',
    labelMenuLink: 'Menu link',
    labelBurger: 'Burger',
    labelBurgerLine: 'Burger Line',
    labelNavbarBlock: 'S Carousel',
    labelNavbarCategory: 'Extra',
    labelHome: 'Home',
    labelAbout: 'About',
    labelContact: 'Contact',
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in config))
      config[name] = defaults[name];
  }

  // Add components
  loadComponents(editor, config);

  // Add blocks
  loadBlocks(editor, config);

});
