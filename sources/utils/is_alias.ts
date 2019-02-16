const Alias: any = /@[a-z]+/;

export const is_alias = (alias: string): boolean => {
    if (!alias) {
        return false;
    }

    return Alias.test(alias);
};
