import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

import "./BioCard.css";

import dayjs from "dayjs";

const formatDate = (isoString) => {
  const day = dayjs(isoString);
  return day.format("DD MM YYYY");
};

const BioCard = ({ targetDate }) => {
  return (
    <IonCard>
      <img
        alt="happy-born-day"
        src="https://static.vecteezy.com/system/resources/thumbnails/023/230/156/small_2x/3d-happy-birthday-text-with-gift-boxes-and-glossy-balloon-bunch-over-blue-podium-png.png"
      />
      <IonCardHeader>
        <IonCardTitle>Results: {formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical:</p>
        <p>Emotional:</p>
        <p>Intellectual:</p>
      </IonCardContent>
    </IonCard>
  );
};

export default BioCard;
