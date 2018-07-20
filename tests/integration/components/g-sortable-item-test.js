import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | g sortable item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    await render(hbs`{{g-sortable-item}}`);

    assert.dom('*').hasText('');

    // Template block usage:"
    await render(hbs`
      {{#g-sortable-item}}
        template block text
      {{/g-sortable-item}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
