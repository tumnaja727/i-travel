import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router';
import './travel1.css';
import firebase from "../Firebase";
// import { push } from 'ionicons/icons';

const Travel1 = () => {
  const [location, setLocation] = useState([])

  useEffect(() => {
    firebase
    .firestore()
    .collection("location")
    .onSnapshot((data) => {
      let docs = [];
      data.forEach((d) => docs.push(d));
      setLocation(docs.map((doc) => Object({ id: doc.id, ...doc.data() })));
    });
  //   .onSnapshot((docs) => {
  //     docs.forEach((doc) => {
  //       data.push({id: doc.id, ...doc.data() });
  //         // console.log(doc.id);
  //         // console.log(doc.data());
  //     });
  //     setLocation(data);
  // });
    // .then();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Travel1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Travel1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="tra">
          {location.map((l, i) => (
            <div key={i} className="box">
              {l.name} / {l.like}
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Travel1;
