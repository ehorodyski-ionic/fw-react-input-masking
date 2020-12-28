import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Home.css';
import CurrencyInput from '../components/CurrencyInput';

const Home: React.FC = () => {
  const [payment, setPayment] = useState<any>();
  const [remaining, setRemaining] = useState<number>(12460);

  useEffect(() => {
    if (!payment) setRemaining(12460);
    else if (payment! >= 12460) setRemaining(0);
    else setRemaining(12460 - payment);
  }, [payment]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pay Your Bill</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pay Your Bill</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonListHeader className="ion-padding">
            Your outstanding balance is $12,460. How much would you like to pay
            today?
          </IonListHeader>
          <IonItem>
            <IonLabel>Today's Payment:</IonLabel>
            <CurrencyInput value={payment} onChange={v => setPayment(v)} />
          </IonItem>
          <IonItem>
            <IonLabel>Remaining balance:</IonLabel>
            <IonLabel>{remaining}</IonLabel>
          </IonItem>
          <IonButton expand="block">Pay Now</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
