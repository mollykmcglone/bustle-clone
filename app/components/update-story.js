import Ember from 'ember';

export default Ember.Component.extend ({
  updateStoryForm: false,
  actions: {
    updateStoryForm() {
      this.set("updateStoryForm", true);
    },
    update(story) {
      var params = {
        title: this.get("title"),
        image: this.get("image"),
        author: this.get("author"),
        date: this.get("date"),
        category: this.get("category"),
        text: this.get("text")
      };
      this.set("updateStoryForm", false);
      this.sendAction("update", story, params);
    }
  }
});
