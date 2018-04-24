import ContractArtifact from 'truffle-contract-schema';
import {DeepPartial, Reducer, ReducersMapObject, Store} from "redux";
import {State} from "./stateInterface";
import {generateStore} from "./generateStore";
import {Web3Load} from "./web3/web3.actions";

export class Vortex<T extends State> {

    private _web3_loader: Promise<any> = undefined;

    private _contracts: ContractArtifact[] = undefined;

    private _reducersMap: ReducersMapObject<T> = undefined;

    private _customState: DeepPartial<T> = undefined;

    private _store: Store<T> = undefined;

    private _network_ids: number[] = [] as number[];

    private static _instance: Vortex<any> = undefined;

    public static factory<U extends State = State>(contracts: ContractArtifact[], loader: Promise<any>, reducersMap: ReducersMapObject<U> = undefined, customState: DeepPartial<U> = undefined): Vortex<U> {
        return (Vortex._instance || (Vortex._instance = new Vortex<U>(contracts, loader, reducersMap, customState)));
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
     * @param {ReducersMapObject<T extends State>} reducersMap Map of reducers (Not combined !)
     * @param {DeepPartial<T extends State>} customState Custom state matching interface that extends State.
     */
    constructor(contracts: ContractArtifact[], loader: Promise<any>, reducersMap: ReducersMapObject<T> = undefined, customState: DeepPartial<T> = undefined) {
        this._contracts = contracts;
        this._web3_loader = loader;
        this._reducersMap = reducersMap;
        this._customState = customState;
    }

    /**
     * Run the Vortex Redux Store.
     */
    public run(): void {
        if (this._contracts) {
            if (this._reducersMap) {
                this._store = generateStore<T>(this._contracts, this._reducersMap, this._customState);
            } else {
                this._store = generateStore(this._contracts);
            }
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
            this._store.dispatch(Web3Load(this._web3_loader));
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
     * Add a new reducer in the Reducer Map.
     *
     * @param {string} field Field Name associated with reducer.
     * @param {Reducer<any, any>} reducer Reducer
     */
    public addReducer(field: string, reducer: Reducer<any, any>): void {
        if (this._reducersMap === undefined) {
            this._reducersMap = {} as ReducersMapObject<T>;
        }
        this._reducersMap[field] = reducer;
    }

    /**
     * Custom Initial State, useful when adding custom properties.
     *
     * @param {DeepPartial<T extends State>} customState
     */
    public setCustomState(customState: DeepPartial<T>): void {
        this._customState = customState;
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

}