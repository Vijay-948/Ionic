import logo from "./logo.svg";
import "./App.css";

import {
  IonApp,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "@ionic/react/css/core.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Name");
  const [birthDate, setBirthDate] = useState("");
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Name:</IonLabel>
            <IonInput
              placeholder="Enter Name"
              value={name}
              onIonChange={(event) => setName(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Date Of Birth:</IonLabel>
            <IonInput
              type="date"
              value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value)}
            />
          </IonItem>
        </IonList>

        <p>
          Your Name: <b>{name} </b>, Born on: <b>{birthDate}</b>
        </p>
      </IonContent>
    </IonApp>
  );
}

export default App;
