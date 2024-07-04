import { initApp } from "./utils/core/appInit.ts";
import AppOverlay from "./components/overscreen_menus/AppOverlay.ts";
import SiteNav from "./components/navigation/SiteNav.ts";
import AppBar from "./components/navigation/AppBar.ts";
import CartMenu from "./components/cart/CartMenu.ts";
import CatalogDisplay from "./components/catalog/CatalogDisplay.ts";

await initApp();

/*** TODO: Seperate this into the initApp() function in the appInit().ts file ***/
// Also look at the appInit.ts and read the TODO there
export const app = document.createElement("div");
const appHTML = document.createElement("template");
const catalogDisplay = new CatalogDisplay();

function initPage() {
  const drawerOverlay = new AppOverlay();
  const appBar = new AppBar();
  const siteNav = new SiteNav();
  const cartMenu = new CartMenu();

  appBar.append(siteNav);
  app.id = "app";
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
  <h3>Hello, world</h3>
  <div>
    <div class="btn-group">
      <app-button iconName="home" iconType="solid" ariaLabel="Home" size="lg"
        >Home</app-button
      >
      <app-button iconName="home" iconType="solid" ariaLabel="Home"
        >Home</app-button
      >
      <app-button iconName="home" iconType="solid" ariaLabel="Home" size="sm"
        >Home</app-button
      >
    </div>

    <div class="btn-group">
      <app-button
        iconName="home"
        iconType="solid"
        ariaLabel="Home"
        size="lg"
        type="secondary"
        >Home</app-button
      >
      <app-button
        iconName="home"
        iconType="solid"
        ariaLabel="Home"
        type="secondary"
        >Home</app-button
      >
      <app-button
        iconName="home"
        iconType="solid"
        ariaLabel="Home"
        size="sm"
        type="secondary"
        >Home</app-button
      >
    </div>

    <div class="btn-group">
      <app-button
        iconName="home"
        iconType="solid"
        ariaLabel="Home"
        size="lg"
        type="tertiary"
        >Home</app-button
      >
      <app-button
        iconName="home"
        iconType="solid"
        ariaLabel="Home"
        type="tertiary"
        >Home</app-button
      >
      <app-button
        iconName="home"
        iconType="solid"
        ariaLabel="Home"
        size="sm"
        type="tertiary"
        >Home</app-button
      >
    </div>

    <div class="btn-group">
      <app-button size="lg" type="primary">Lorem Ipsum</app-button>
      <app-button type="primary">Lorem Ipsum</app-button>
      <app-button size="sm" type="primary">Lorem Ipsum</app-button>
    </div>

    <div class="btn-group">
      <app-button size="lg" type="secondary">Lorem Ipsum</app-button>
      <app-button type="secondary">Lorem Ipsum</app-button>
      <app-button size="sm" type="secondary">Lorem Ipsum</app-button>
    </div>

    <div class="btn-group">
      <app-button type="tertiary" size="lg">Lorem Ipsum</app-button>
      <app-button type="tertiary">Lorem Ipsum</app-button>
      <app-button type="tertiary" size="sm">Lorem Ipsum</app-button>
    </div>

    <div class="btn-group">
      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="primary"
        size="lg"
      ></app-button>

      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="primary"
      ></app-button>

      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="primary"
        size="sm"
      ></app-button>
    </div>

    <div class="btn-group">
      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="secondary"
        size="lg"
      ></app-button>

      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="secondary"
      ></app-button>

      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="secondary"
        size="sm"
      ></app-button>
    </div>

    <div class="btn-group">
      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="tertiary"
        size="lg"
      ></app-button>

      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="tertiary"
      ></app-button>

      <app-button
        iconName="shield-plus"
        iconType="solid"
        type="tertiary"
        size="sm"
      ></app-button>
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
