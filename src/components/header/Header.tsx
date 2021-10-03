import { IonHeader, IonText } from "@ionic/react";
import * as React from "react";

import "./header.scss";

interface HeaderProps {
    page: string;
}

const Header: React.FC<HeaderProps> = (props) => (
    <IonHeader>
        <IonText color="primary">Dan Regazzi</IonText>
    </IonHeader>
);

export default Header;