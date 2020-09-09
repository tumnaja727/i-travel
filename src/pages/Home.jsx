import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
//import { useParams } from 'react-router';
import './Home.css';
import firebase from "../Firebase";
import { Link, useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();

  const logout = () => {
    firebase.auth().signOut()
    .then((res) => {
      console.log(res);
      // alert("Logout!");
      history.push("/login");
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        Home
        <IonButton routerLink="/travel1">travel1</IonButton>
        <button onClick={logout}>Logout</button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
