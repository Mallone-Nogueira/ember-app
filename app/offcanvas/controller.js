import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    set(this, 'tabs', {
      template: 'offcanvas',
      items: [
        {
          label: 'Main',
          tabs: {
            template: 'offcanvas',
            items: [
              {
                label: 'Product',
                template: 'offcanvas.main.product'
              },
              {
                label: 'Master',
                template: 'offcanvas.main.master',
                disabled: true,
              },
              {
                label: 'All',
                visible: false,
                tabs: {
                  items: [
                    {
                      label: 'Product',
                      template: 'offcanvas.main.product'
                    },
                    {
                      label: 'Master',
                      template: 'offcanvas.main.master'
                    },
                    {
                      label: 'Users',
                      template: 'offcanvas.users'
                    },
                    {
                      label: 'All',
                      tabs: {
                        items: [
                          {
                            label: 'Product',
                            template: 'offcanvas.main.product'
                          },
                          {
                            label: 'Master',
                            template: 'offcanvas.main.master'
                          },
                          {
                            label: 'Users',
                            template: 'offcanvas.users'
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          label: 'Users',
          template: 'offcanvas.users'
        }
      ]
    });

    setTimeout(() => {
      set(get(this, 'tabs.items')[0].tabs.items[2], 'visible', true);
    }, 2500);
  },



  actions: {
    close() {
      this.send('closeOffCanvas');
    },
  }
});
