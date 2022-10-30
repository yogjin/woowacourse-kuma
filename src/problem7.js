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

  const friendRecommendationScores = {};
  const userFriends = allUserFriendsList[user] || [];

  for (const [id, friends] of Object.entries(allUserFriendsList)) {
    if (id === user || userFriends.includes(id)) {
      continue;
    }

    friends.forEach((friend) => {
      if (userFriends.includes(friend)) {
        if (friendRecommendationScores.hasOwnProperty(id)) {
          friendRecommendationScores[id] += 10;
        } else {
          friendRecommendationScores[id] = 10;
        }
      }
    });
  }

  visitors.forEach((visitorId) => {
    if (!userFriends.includes(visitorId)) {
      if (friendRecommendationScores.hasOwnProperty(visitorId)) {
        friendRecommendationScores[visitorId] += 1;
      } else {
        friendRecommendationScores[visitorId] = 1;
      }
    }
  });

  const sortedFriendRecommendationScoresArray = Object.entries(
    friendRecommendationScores
  ).sort((id_score_a, id_score_b) => {
    const [id_a, score_a] = id_score_a;
    const [id_b, score_b] = id_score_b;

    if (score_a > score_b) {
      return -1;
    } else if (score_a < score_b) {
      return 1;
    } else {
      if (id_a < id_b) {
        return -1;
      } else if (id_a > id_b) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  const answer = sortedFriendRecommendationScoresArray
    .map((id_score) => id_score[0])
    .slice(0, 5);

  return answer;
}

module.exports = problem7;
