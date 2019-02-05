import { utils } from 'ethers';

const AddressRegex: any = /0x[a-fA-F0-9]{64}/;

export const address_checker = (address: string): string => {
    if (!AddressRegex.test(address)) {
        throw new Error(`Invalid Ethereum Address ${address}`);
    }
    return utils.getAddress(address);
};
