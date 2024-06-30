import { initApp } from './utils/core/appInit.ts';
import { Catalog } from './utils/core/catalogManager.ts';
import { createButton } from './utils/ui/elementCreator.ts';
// import { DrawerOverlayManager } from './utils/ui/drawerOverlayManager.ts';
import AppOverlay from './components/overscreen_menus/AppOverlay.ts';
import SiteNav from './components/navigation/SiteNav.ts';
import AppBar from './components/navigation/AppBar.ts';
import CartMenu from './components/cart/CartMenu.ts';
import CatalogCard from './components/catalog/CatalogCard.ts';
import CatalogDisplay from './components/catalog/CatalogDisplay.ts';

await initApp();

/*** TODO: Seperate this into the initApp() function in the appInit().ts file ***/
// Also look at the appInit.ts and read the TODO there
export const app = document.createElement('div');
const appHTML = document.createElement('template');
const catalogDisplay = new CatalogDisplay;

function initPage() {
  const drawerOverlay = new AppOverlay();
  const appBar = new AppBar();
  const siteNav = new SiteNav();
  const cartMenu = new CartMenu();

  appBar.append(siteNav);
  app.id = 'app';
  drawerOverlay.drawers.cart.appendToDrawerContent(cartMenu);

  app.append(appBar);
  app.append(drawerOverlay);

  for (const drawer in drawerOverlay.drawers) {
    app.append(drawerOverlay.drawers[drawer]);
  }

  initTesting(drawerOverlay);
}
/*** ******* ***/

appHTML.innerHTML = /* HTML */ `
  <div>
    <example-component></example-component>
    <div class="btn-group">
      <app-button
        iconName="yelp"
        iconType="logo"
        ariaLabel="Home"
        >Home</app-button
      >
      <app-button
        iconName="windows"
        iconType="logo"
        type="secondary"></app-button>

      <app-button
        iconName="windows"
        iconType="logo"
        type="secondary"
        size="sm"></app-button>

      <app-button
        iconName="windows"
        iconType="logo"
        type="secondary"
        size="lg"></app-button>

      <app-button type="tertiary">Test</app-button>

      <app-button
        iconName="windows"
        iconType="logo"
        type="secondary"
        size="lg"
        >Windows 11</app-button
      >
      <app-button
        type="tertiary"
        size="sm"
        >Test</app-button
      >
    </div>

    <light-toggle></light-toggle>
  </div>
`;

app.append(catalogDisplay);

export function initTesting(overlay: AppOverlay) {
  // const buttonToggleCart = createButton(
  //   'Toggle Cart',
  //   () => overlay.drawers.cart.toggle(),
  //   'primary'
  // );

  // const buttonToggleNav = createButton(
  //   'Toggle Nav',
  //   () => overlay.drawers.navigation.toggle(),
  //   'secondary'
  // );

  // app.append(buttonToggleCart);
  // app.append(buttonToggleNav);

  // DrawerOverlayManager.getDrawer('cartDrawer').open();
}

initPage();

app.append(appHTML.content.cloneNode(true));
