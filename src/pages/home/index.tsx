import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { cards } from "../../mock/cards";
import styles from './styles.module.scss';

export function Home(){
    return(
        <div className={styles.app}>
            <Grid cards={cards}/>
        </div>
    );
}