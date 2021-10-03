import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText } from '@ionic/react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Header } from '../../header';

import "./home.scss";

interface HomePageProps extends RouteComponentProps<{}> {}

const Home: React.FC<HomePageProps> = ({match, history}) => (
    <IonPage className="home">
        <Header page="home" />
        <IonContent color="dark">
            <div className="top-banner">
                <IonGrid>
                    <IonRow>
                        <IonCol size="3"></IonCol>
                        <IonCol size="6">
                            <IonText color="light"><h2>Dan Regazzi is moving and will return soon.</h2></IonText>
                        </IonCol>
                        <IonCol size="3"></IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </IonContent>
    </IonPage>
);

export default Home;