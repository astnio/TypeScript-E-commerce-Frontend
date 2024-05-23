import { ProductGroup } from "../../models/productGroup";
import { Catalog } from "../../utils/core/catalogManager";
import CatalogCard from "./CatalogCard";

const TPL_CatalogContainer = document.createElement('template');

const TPL_CatalogContainer_css = /* CSS */ `
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>
`;

TPL_CatalogContainer.innerHTML = /* HTML */ `
  ${TPL_CatalogContainer_css}

  <div class="container">
    <p>Hello, world</p>
  </div>
`;

export default class CatalogContainer extends HTMLElement {
  private _catalogContainer: HTMLElement;
  private _catalogProducts: { [key: string]: ProductGroup}

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const clone = TPL_CatalogContainer.content.cloneNode(true);
    shadow.append(clone);

    this._catalogContainer = shadow.querySelector('.container')!;
    this._catalogProducts = Catalog.getAllGroups();

    this.populateCatalog();
  }

  connectedCallback() {}

  disconnectedCallback() {}

  populateCatalog(){
    for (const key in this._catalogProducts) {
      const catalogCard = new CatalogCard(Catalog.getGroup(key));
      this._catalogContainer.append(catalogCard);
    }
  }
}

window.customElements.define('catalog-container', CatalogContainer);
