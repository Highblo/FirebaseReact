import "./App.css";
import db from "./firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "posts"));
    querySnapshot.then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => doc.data()));
    });

    /* リアルタイムで取得 */
    onSnapshot(collection(db, "posts"), (post) => {
      setPosts(post.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div>
        {posts.map((post) => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};