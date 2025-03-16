import { IonContent, IonPage } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div>
                    <h1>Home</h1>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
