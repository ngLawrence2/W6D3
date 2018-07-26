const followToggle = require('./follow_toggle.js');
const usersSearch = require('./users_search.js');

$( () => {
  $('button.follow-toggle').each( (i, dom) => {
    new followToggle(dom, {});
  });
  $('nav.users-search').each( (i, dom) => {
    new usersSearch(dom, {});
  });
});