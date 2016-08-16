import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        title: this.get("title"),
        image: this.get("image"),
        author: this.get("author"),
        date: this.get("date"),
        category: this.get("category"),
        text: this.get("text")
      };
      this.sendAction("save2", params);
    }
  }
});
