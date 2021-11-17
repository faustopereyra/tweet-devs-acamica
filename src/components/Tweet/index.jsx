import React from "react";
import { deleteData, updateData } from "../../services/CRUDops";

const Tweet = ({ user, tweet, id, likes }) => {
  const handleDelete = async () => {
    await deleteData("tweets", id);
  };

  const handleLike = async () => {
    const likesCounter = likes ? likes + 1 : 1;
    await updateData("tweets", id, { likes: likesCounter });
  };

  return (
    <div>
      <h3>{user}</h3>
      <p>{tweet}</p>
      <button onClick={handleLike}>Like {likes ? `(${likes})` : ""}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Tweet;
