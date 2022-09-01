import { CardProps } from '../../data/@types/card-props';
import styles from './styles.module.scss';
import logo from '../../img/logo.jpg';

export function Card({ flipper = false, back, handleClick, id }: CardProps){

    const handleClickFn = (id: string) => {
        if(handleClick){
            handleClick(id);
        }
    }

    return(
        <div className={styles.card} onClick={() => handleClickFn(id)}>
            <div className={`${styles.card_content} ${flipper ? `${styles.flipper}` : ''}`}>
                <div className={styles.card_face_front}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.card_face_back}>
                    <img src={back} alt="" />
                </div>
            </div>
        </div>
    );
}