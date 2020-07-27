// This HomeyScript returns true when an user is at home and awake

let users = await Homey.users.getUsers();

return _.some(users, user => {
  if (user.present && !user.asleep) return true;
  return false;
});
