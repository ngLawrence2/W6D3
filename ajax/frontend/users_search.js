class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find('.users');
    this.$el.on('click', handleInput());
  }
  
  renderResults(users) {
    
  }
  
  handleInput(e) {
    
  }
}