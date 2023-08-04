import React from "react";
import "./App.css";
import firebase from "firebase/app"; // Import Firebase
import "firebase/auth"; // Import additional Firebase services you need
import { SongList } from "./SongList"; // Check if this path is correct
import Player from "./Player"; // Check if this path is correct

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [user, setUser] = useState(null); // Add user state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSelectSong = (song) => {
    setCurrentSong(song);
  };

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="app">
      <h1>Spotify Clone</h1>
      <div className="content">
        {user ? (
          <>
            <SongList songs={songs} onSelectSong={handleSelectSong} />
            <Player currentSong={currentSong} />
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <button onClick={handleSignIn}>Sign In with Google</button>
        )}
      </div>
    </div>
  );
}

export default App;
