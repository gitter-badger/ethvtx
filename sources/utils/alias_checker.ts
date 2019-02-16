const Alias: any = /@[a-z]+/;

export const alias_checker = (alias: string): string => {
    if (!alias) return alias;

    if (!Alias.test(alias)) {
        throw new Error(`Invalid Vortex Alias ${alias}: Should respect the following RegExp '/@[a-z]+/'`);
    }
    return alias;
};
