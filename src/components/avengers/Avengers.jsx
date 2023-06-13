import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore/lite";
import "./avengers.style.css";

const Avengers = () => {
  const [hero, setHero] = useState("");
  const [heroImg, setHeroImg] = useState("");
  const [listOfHeroImg, setListOfHeroImg] = useState([]);
  const [listOfHeros, setListOfHeros] = useState([]);

  const getAllAvengers = async () => {
    try {
      const establishedConnectionWithDB = collection(db, "avengers");
      const establishedConnectionWithFields = await getDocs(
        establishedConnectionWithDB
      );
      const retrieveDataFromTheDB = establishedConnectionWithFields.docs.map(
        (data) => {
          return { ...data.data(), id: data.id };
        }
      );

      setListOfHeros(retrieveDataFromTheDB);
      setHero("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAvengers();
    console.log("use effect is running");
  }, []);

  const onChangeNameHandler = (e) => {
    setHero(e.target.value);
  };

  const onChangeImgHandler = (e) => {
    setHeroImg(e.target.value);
  };

  const onClickHandler = async () => {
    try {
      const addHero = {
        name: hero,
        picturePath: heroImg,
      };

      const avengersCollection = collection(db, "avengers");
      await addDoc(avengersCollection, addHero);
      await getAllAvengers();
      setListOfHeroImg([...heroImg, listOfHeroImg]);
      //   setHeroImg("");
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteHandler = async (heroID) => {
    try {
      await deleteDoc(doc(db, "avengers", heroID));
      await getAllAvengers();
    } catch (error) {
      console.log(error);
    }
  };

  const renderAllAvengers = listOfHeros.map((el, index) => {
    return (
      <div className="avengers-container__list-view" key={index}>
        <div className="avengers-container__each-list">
          <img src={heroImg} width="100px"></img>
          <p>{el.name}</p>
          <button onClick={() => onDeleteHandler(el.id)}>delete</button>
        </div>
      </div>
    );
  });

  return (
    <div className="avengers-container-main">
      <div className="avengers-container__view">
        <h3>Avengers</h3>
        <input
          placeholder="enter a name"
          value={hero}
          onChange={onChangeNameHandler}
        ></input>
        <input
          placeholder="enter an image URL"
          value={heroImg}
          onChange={onChangeImgHandler}
        ></input>
        <button onClick={onClickHandler}>Add</button>
      </div>
      {renderAllAvengers}
    </div>
  );
};

export default Avengers;
