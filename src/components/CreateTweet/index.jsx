import React, { useContext } from "react";
import { userContext } from "../../contexts/userProvider";
import { setData } from "../../services/CRUDops";
import useInput from "../../hooks/useInput";

const CreateTweet = () => {
  const { displayName } = useContext(userContext);
  const [tweet, handleTweet] = useInput();

  const handleCreate = async () => {
    await setData("tweets", { user: displayName, tweet });
  };
  return (
    <div>
      <textarea
        type="text"
        placeholder="What are yor thinking?"
        onChange={handleTweet}
        value={tweet}
      />
      <button onClick={handleCreate}>Create Tweet</button>
    </div>
  );
};

export default CreateTweet;
