import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | offcanvas/main', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:offcanvas/main');
    assert.ok(controller);
  });
});
