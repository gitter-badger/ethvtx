import { utils } from 'ethers';

const AddressRegex: any = /0x[a-fA-F0-9]{40}/;
const Alias: any = /@[a-z]+/;

export const address_checker = (address: string): string => {
    if (!AddressRegex.test(address)) {
        if (!Alias.test(address)) {
            throw new Error(`Invalid Ethereum Address ${address}`);
        } else {
            return address;
        }
    }
    return utils.getAddress(address);
};
