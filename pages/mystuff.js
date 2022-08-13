import { data } from "autoprefixer";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../Firebase";
import MyStuffMovie from "../Components/MyStuffMovie";

const mystuff = () => {
  let [User, setUser] = useState(null);
  let [Stuff, setStuff] = useState([]);

  let Func = async () => {
    let All = [];
    const CollectionRef = collection(db, `${User?.uid}`);
    await getDocs(CollectionRef).then((Snap) => {
      Snap.docs.map((EachSnap) => {
        All.push(EachSnap.data());
      });

    })
    .then(()=>
    {
        setStuff(All);
    });
  };

useEffect(() => {
    Func()
  }, [User]);

  useEffect(() => {
    auth.onAuthStateChanged((Use) => {
      setUser(Use);
    });
  }, []);

  return <div className="flex space-x-2">
    {
        Stuff?
        Stuff.map((EachStuff,Ind)=>
        {
            return(
              EachStuff.Movie?
                <MyStuffMovie Movie={EachStuff.Movie} key={Ind}/>:""
            )
        })
        :""
    }
  </div>;
};

export default mystuff;
