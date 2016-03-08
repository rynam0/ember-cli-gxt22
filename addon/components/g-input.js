import Ember from 'ember';
import layout from '../templates/components/g-input';
const { Component, defineProperty, computed } = Ember;

export default Component.extend({
  layout,
  classNames: ['g-input'],

  id: computed('elementId', function() {
    return `${this.get('elementId')}-g-input`;
  }),

  init() {
   this._super(...arguments);
   var path = this.get('path');
   defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${path}`));
   defineProperty(this, 'value', computed.alias(`model.${path}`));
 },

 isValid: computed('validation.isValid', function() {
   let validation = this.get('validation');
   return (validation) ? validation.get('isValid') : true;
 })

});
