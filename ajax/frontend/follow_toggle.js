const APIUtil = require('./api_util.js');
class FollowToggle {
  constructor(el, options) {
    // debugger;
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = (this.$el.data('initial-follow-state') || options.followState);
    this.render();
    this.$el.on("click",this.handleClick.bind(this)); 
    
  }
  
  render() {
    // debugger;
    if(this.followState==='unfollow') {
        $(this.$el).html("follow");
    }else {
        $(this.$el).html("unfollow");
    }
  }
  
  handleClick(e) {
    // debugger;
    let this1 = this;
    e.preventDefault();
    if(this.followState==='follow') {
      APIUtil.followUser(this.userId).then(()=> {
        this1.followState='unfollow';
        this1.render();
      });
      
    }else if (this.followState==='unfollow'){
      APIUtil.unfollowUser(this.userId).then(()=> {
        this1.followState='unfollow';
        this1.render();
      });
    }
  }
}
module.exports = FollowToggle;