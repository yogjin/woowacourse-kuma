function problem7(user, friends, visitors) {
  const allUserFriendsList = {};

  friends.forEach((friend) => {
    const [id_a, id_b] = friend;
    if (!allUserFriendsList.hasOwnProperty(id_a)) {
      allUserFriendsList[id_a] = [id_b];
    } else {
      allUserFriendsList[id_a].push(id_b);
    }
    if (!allUserFriendsList.hasOwnProperty(id_b)) {
      allUserFriendsList[id_b] = [id_a];
    } else {
      allUserFriendsList[id_b].push(id_a);
    }
  });
}

module.exports = problem7;
