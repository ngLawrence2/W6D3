const APIUtil = {
  followUser: id => {
    $.ajax({ 
      url: `/users/${id}/follow`,
      type: 'DELETE',
      dataType: 'json'
    });
  },

  unfollowUser: id => {
    $.ajax({ 
      url: `/users/${id}/follow`,
      type: 'POST',
      dataType: 'json'
    });
  },
  
  searchUsers: (queryVal, success) => {
    $.ajax({
      url: `/users/search`,
      type: 'GET',
      dataType: 'json'
    });
  }
};

module.exports = APIUtil;

