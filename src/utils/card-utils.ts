import { CardProps } from "../data/@types/card-props";
import { cards } from "../mock/cards";

// gerar um id novo
const keyGen = (): string => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
}

// duplicar o array
export const duplicateArray = <T>(array: T[]): T[] => {
    return array.concat(array);
}

// gerar uma posição aleatoria para cada objeto do array
export const sortArray = <T>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
}

export const regenerateCard = (cards: CardProps[]): CardProps[] => {
    return cards.map((card) => ({ ...card, id: keyGen() }));
}

export const duplicateRegenerateSortArray = (cards: CardProps[]): CardProps[] => {
    return sortArray(regenerateCard(duplicateArray(cards)));
}