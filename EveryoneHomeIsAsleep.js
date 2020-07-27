// This HomeyScript returns true when all users that are at home also are sleeping

let users = await Homey.users.getUsers();

return _.every(users, user => {
  if (user.present && !user.asleep) return false;
  return true;
});
