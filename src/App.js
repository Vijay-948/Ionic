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

import { useStoredState } from "./lib/hook";

const getToday = () => {
  return new Date().toISOString().slice(0, "yyyy-mm-dd".length);
};

function App() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useStoredState("birthDate", "");
  const [targetDate, setTargetDate] = useState(getToday);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary" className="ion-text-center">
            Hello World
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {Boolean(birthDate) && (
          <BioCard birthDate={birthDate} targetDate={targetDate} />
        )}
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
      </IonContent>
    </IonApp>
  );
}

export default App;
