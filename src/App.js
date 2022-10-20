import "./App.css";
import db from "./firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

export const App = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "posts"));
    querySnapshot.then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => doc.data()));
      console.log(posts);
    });
  }, []);

  return (
    <div className="App">
    </div>
  );
};