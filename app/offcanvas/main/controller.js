import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);

    set(this, 'tabs', {
      template: 'offcanvas.main',
      items: [
        {
          label: 'Product',
          template: 'offcanvas.main.product'
        },
        {
          label: 'Master',
          template: 'offcanvas.main.master'
        }
      ]
    });
  },
});
