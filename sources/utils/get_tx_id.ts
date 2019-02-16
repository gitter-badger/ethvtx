let tx_id = 1;

export const get_tx_id = (): number => {
    ++tx_id;
    return tx_id - 1;
};
