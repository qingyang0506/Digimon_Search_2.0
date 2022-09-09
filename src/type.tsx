export type Digimon = {
    name: string;
    level: string;
    img: string;
}

export interface Props {
    open: boolean;
    handleClose: () => void;
}

export interface sortButtonProps {
    name: string,
    sortAscend: () => void,
    sortDescend: () => void
}