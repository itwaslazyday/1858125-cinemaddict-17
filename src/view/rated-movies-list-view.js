import AbstractView from '../framework/view/abstract-view.js';

const createMoviesListTemplate = () => `<section class="films-list films-list--extra films-list--rated">
<h2 class="films-list__title">Top rated</h2></section>`;

export default class RatedMoviesListView extends AbstractView {

  get template() {
    return createMoviesListTemplate();
  }
}
