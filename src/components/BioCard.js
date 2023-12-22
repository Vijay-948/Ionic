import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

import "./BioCard.css";

import dayjs from "dayjs";
import { Bioryhythm } from "../lib/Bioryhythm";
import BiorhythmChart from "./BiorhythmChart";

const formatDate = (isoString) => {
  const day = dayjs(isoString);
  return day.format("DD MM YYYY");
};

const BioCard = ({ birthDate, targetDate }) => {
  const biorhythms = Bioryhythm(birthDate, targetDate);
  return (
    <IonCard className="biorhythm">
      <img
        alt="happy-born-day"
        src="https://static.vecteezy.com/system/resources/thumbnails/023/230/156/small_2x/3d-happy-birthday-text-with-gift-boxes-and-glossy-balloon-bunch-over-blue-podium-png.png"
      />
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)} </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart />
        <p className="physical">Physical: {biorhythms.physical.toFixed(4)}</p>
        <p className="emotional">
          Emotional: {biorhythms.emotional.toFixed(4)}
        </p>
        <p className="intellectual">
          Intellectual: {biorhythms.intellectual.toFixed(4)}
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default BioCard;

// {formatDate(targetDate)}
