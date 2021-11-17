import React from "react";
import Tweet from "../Tweet";
import useTweet from "../../hooks/useTweet";

const TweetsList = () => {
  const tweets = useTweet();
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet {...tweet} key={tweet.id} />
      ))}
    </div>
  );
};

export default TweetsList;
