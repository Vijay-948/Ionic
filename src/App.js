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

import BioCard from "./components/BioCard";

const getToday = () => {
  return new Date().toISOString().slice(0, "yyyy-mm-dd".length);
};

function App() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [targetDate, setTargetDate] = useState(getToday);
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
            <IonLabel position="fixed" color="primary">
              Name:
            </IonLabel>
            <IonInput
              placeholder="Enter Name"
              value={name}
              onIonChange={(event) => setName(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed" color="primary">
              Born Date:
            </IonLabel>
            <IonInput
              type="date"
              value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed" color="primary">
              Target Date:
            </IonLabel>
            <IonInput
              type="date"
              value={targetDate}
              onIonChange={(event) => setTargetDate(event.detail.value)}
            />
          </IonItem>
        </IonList>

        {/* <p>
          Your Name: <b>{name} </b>, Born on: <b>{birthDate}</b> Target Date:{" "}
          <b>{targetDate}</b>
        </p> */}
        <BioCard targetDate={targetDate} />
      </IonContent>
    </IonApp>
  );
}

export default App;
