import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  category: DS.attr(),
  text: DS.attr()
});
