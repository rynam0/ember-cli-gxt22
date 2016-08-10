import Ember from 'ember';
import PikadayInput from 'ember-pikaday/components/pikaday-input';
import PikadayMixin from 'ember-pikaday/mixins/pikaday';

export default PikadayInput.extend(PikadayMixin, {

  classNames: ['g-input-field'],
  theme: 'g-theme',
  format: 'MM/DD/YYYY',

  onPikadaySelect: function() {
    let current = this.get('value');
    let selected = this.get('pikaday').getDate();
    if (current) {
      selected.setHours(current.getHours(), current.getMinutes(), current.getSeconds());
    } else {
      selected.setHours(0, 0, 0);
    }
    this.set('value', selected);
  },

  onPikadayRedraw: function() {
    let that = this;
    let $pikadayEl = Ember.$(this.get('pikaday').el);
    let $btn = Ember.$('<button class="g-button">Today</button>').click(function() {
      that.get('pikaday').setDate(new Date());
    });
    let $wrapper = Ember.$('<div class="today-button"></div>').append($btn);
    $pikadayEl.append($wrapper);
  }
});