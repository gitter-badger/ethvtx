import ContractArtifact from 'truffle-contract-schema';
import {DeepPartial, Reducer, ReducersMapObject, Store} from "redux";
import {State} from "./stateInterface";
import {generateStore, GeneratorConfig} from "./generateStore";
import {Web3Load} from "./web3/web3.actions";
import {ContractLoad} from "./contracts/contracts.actions";
import {AccountAdd} from "./accounts/accounts.actions";

export class Vortex<T extends State> {

    private readonly _web3_loader: Promise<any> = undefined;

    private _contracts: ContractArtifact[] = undefined;

    private _config: GeneratorConfig<T> = {};

    private _store: Store<T> = undefined;

    private _network_ids: number[] = [] as number[];

    private static _instance: Vortex<any> = undefined;

    public static factory<U extends State = State>(contracts: ContractArtifact[], loader: Promise<any>, config: GeneratorConfig<U> = undefined): Vortex<U> {
        return (Vortex._instance || (Vortex._instance = new Vortex<U>(contracts, loader, config)));
    }

    public static get<U extends State = State>(): Vortex<U> {
        return Vortex._instance;
    }

    /**
     * Instantiate a new Vorte instance.
     * Accessing VortexInstance will give access to the last instanciated Vortex.
     *
     * @param {[]} contracts List of contract artifacts created by truffle.
     * @param loader Promise that returns a web3 instance ready to be used.
     * @param {GeneratorConfig<T>} config Configuration arguments for the store generator.
     */
    constructor(contracts: ContractArtifact[], loader: Promise<any>, config: GeneratorConfig<T> = undefined) {
        this._contracts = contracts;
        this._web3_loader = loader;
        this._config = config || {};
    }

    /**
     * Run the Vortex Redux Store.
     */
    public run(): void {
        if (this._contracts) {
            this._store = generateStore(this._contracts, this._config);
        } else {
            throw new Error("No Contracts Given");
        }
    }

    /**
     * Load Web3 instance from given source.
     * @param {Promise<any>} source The source that returns an instance when resolved.
     */
    public loadWeb3(): void {
        if (this._store) {
            this._store.dispatch(Web3Load(this._web3_loader, this._network_ids));
        } else {
            throw new Error("Call run before.");
        }
    }

    /**
     * Add a new contract in contract list.
     *
     * @param {} contract Contract to add.
     */
    public addContract(contract: ContractArtifact): void {
        if (this._contracts === undefined) {
            this._contracts = [] as ContractArtifact[];
        }
        this._contracts.push(contract);
    }

    /**
     * Adds a network id to whitelist.
     *
     * @param {number} network_id Network Id to add.
     */
    public addNetwork(network_id: number): void {
        this._network_ids.push(network_id);
    }

    /**
     *  Takes a Truffle Contract Artifact and extracts all network ids where Contract has instances, adds them to whitelist
     *
     * @param {any} contract A Truffle Contract Artifact
     */
    public networksOf(contract: ContractArtifact): void {
        this._network_ids = this._network_ids.concat(Object.keys(contract.networks).map((val: string) => parseInt(val)));
    }

    /**
     * Add a new reducer in the Reducer Map.
     *
     * @param {string} field Field Name associated with reducer.
     * @param {Reducer<any, any>} reducer Reducer
     */
    public addReducer(field: string, reducer: Reducer<any, any>): void {
        if (this._config.reducer === undefined) {
            this._config.reducer = {} as ReducersMapObject<T>;
        }
        this._config.reducer[field] = reducer;
    }

    /**
     * Custom Initial State, useful when adding custom properties.
     *
     * @param {DeepPartial<T extends State>} customState
     */
    public setCustomState(customState: DeepPartial<T>): void {
        this._config.custom_state = customState;
    }

    /**
     * Load a new instance of a Smart Contract. Expect a new Feed element and
     * the contracts section to get updated.
     *
     * @param {string} contractName
     * @param {string} contractAddress
     */
    public loadContract(contractName: string, contractAddress: string): void {
        if (this._store) {
            this._store.dispatch(ContractLoad(contractName, contractAddress));
        } else {
            throw new Error("Call run before.");
        }
    }

    /**
     * Add a new contract to fetch pool.
     *
     * @param {string} address Address to fetch
     */
    public subscribeAccount(address: string): void {
        if (this._store) {
            this._store.dispatch(AccountAdd(address));
        } else {
            throw new Error("Call run before.");
        }
    }

    /**
     * Contracts getter
     *
     * @returns {ContractArtifact[]} Array of loaded artifacts.
     */
    public get Contracts(): ContractArtifact[] {
        return (this._contracts);
    }

    /**
     * Store getter
     *
     * @returns {Store<T extends State>} Instance of Store
     */
    public get Store(): Store<T> {
        if (!this._store)
            throw new Error("Call run before");
        return (this._store);
    }

    /**
     * Network Id Whitelist getter.
     *
     * @returns {number[]} List of whitelisted network ids.
     */
    public get Networks(): number[] {
        return (this._network_ids);
    }
}
