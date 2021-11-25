import "./App.css";
import { useContext } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetsList from "./components/TweetsList";
import { userContext } from "./contexts/userProvider";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

function App() {
  const user = useContext(userContext);

  return (
    <div>
      {user ? (
        <>
          <SignOut />
          <h1>Welcome dev!</h1>
          <CreateTweet />
          <TweetsList />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
