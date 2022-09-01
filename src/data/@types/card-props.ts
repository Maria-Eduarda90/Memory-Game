export type CardProps = {
    id: string;
    flipper?: boolean;
    back: string;
    handleClick?: (id: string) => void;
}