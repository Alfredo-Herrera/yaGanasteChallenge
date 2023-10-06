export type ModalTakeDecisionProps = {
    title: string;
    description: string;
    decisionFuntion: () => void;
    openModal: boolean;
    closeModal: (viewModal: boolean) => void;
    loading: boolean;
    img: string;
    moreInfo: string;
};
