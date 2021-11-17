import "./App.css";
import CreateTweet from "./components/CreateTweet";
import TweetsList from "./components/TweetsList";

function App() {
  return (
    <div>
      <h1>Welcome dev!</h1>
      <CreateTweet />
      <TweetsList />
    </div>
  );
}

export default App;
