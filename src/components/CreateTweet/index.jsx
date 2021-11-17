import React from "react";
import { setData } from "../../services/CRUDops";
import useInput from "../../hooks/useInput";

const CreateTweet = () => {
  const [user, handleUser] = useInput();
  const [tweet, handleTweet] = useInput();

  const handleCreate = async () => {
    await setData("tweets", { user, tweet });
  };
  return (
    <div>
      <textarea
        type="text"
        placeholder="What are yor thinking?"
        onChange={handleTweet}
        value={tweet}
      />
      <input
        type="text"
        placeholder="Your Name"
        onChange={handleUser}
        value={user}
      />
      <button onClick={handleCreate}>Create Tweet</button>
    </div>
  );
};

export default CreateTweet;
