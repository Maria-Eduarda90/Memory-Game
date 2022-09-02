import { useRef, useState } from "react";
import { CardProps } from "../../data/@types/card-props";
import { GridProps } from "../../data/@types/grid-props";
import { duplicateRegenerateSortArray } from "../../utils/card-utils";
import { Card } from "../Card";
import styles from "./styles.module.scss";

export function Grid({ cards }: GridProps){
    const [ stateCards, setStateCards ] = useState(() => {
        return duplicateRegenerateSortArray(cards);
    });
    const first = useRef<CardProps | null>(null);
    const second = useRef<CardProps | null>(null);
    const unflip = useRef(false);
    const [matches, setMatches] = useState(0);
    const [moves, setMoves] = useState(0);

    const handleReset = () => {
        setStateCards(duplicateRegenerateSortArray(cards));
        first.current = null;
        second.current = null;
        unflip.current = false;
        setMatches(0);
        setMoves(0);
    }

    const handleClick = (id: string) => {
        const newStateCards = stateCards.map(card => {
            if(card.id !== id) return card;

            if(card.flipper) return card;

            if(unflip.current && first.current && second.current){
                first.current.flipper = false;
                second.current.flipper = false;
                first.current = null;
                second.current = null;
                unflip.current = false;
            }

            card.flipper = true;

            if(first.current === null){
                first.current = card;
            } else if(second.current === null){
                second.current = card;
            }

            if (first.current && second.current){
                if(first.current.back === second.current.back){
                    first.current = null;
                    second.current = null;
                    setMatches(m => m + 1);
                } else {
                    unflip.current = true;
                }

                setMoves(m => m + 1);
            }

            return card;
        });

        setStateCards(newStateCards);
    }

    return(
        <>
            <div className={styles.text}>
                <h1>MemoryGame-Dragon-ball</h1>
                <p>
                    Moves: {moves} | Matches: {matches} | <button onClick={handleReset}>Reset Game</button>
                </p>
            </div>
            <div className={styles.grid}>
                {stateCards.map(card => {
                    return(
                        <Card {...card} key={card.id} handleClick={handleClick}/>
                    )
                })}
            </div>
        </>
    );
}
