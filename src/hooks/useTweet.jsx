import { useEffect, useState } from "react";
import { getSubscription } from "../services/CRUDops";

const useTweet = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(async () => {
    const unsubscribe = await getSubscription("tweets", (snapData) => {
      const tweetData = snapData.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setTweets(tweetData);
    });

    return () => unsubscribe();
  }, []);

  return tweets;
};

export default useTweet;
