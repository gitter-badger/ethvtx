"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateStore_1 = require("./generateStore");
const web3_actions_1 = require("./web3/web3.actions");
class Vortex {
    /**
     * Instantiate a new Vorte instance.
     * Accessing VortexInstance will give access to the last instanciated Vortex.
     *
     * @param {[]} contracts List of contract artifacts created by truffle.
     * @param loader Promise that returns a web3 instance ready to be used.
     * @param {ReducersMapObject<T extends State>} reducersMap Map of reducers (Not combined !)
     * @param {DeepPartial<T extends State>} customState Custom state matching interface that extends State.
     */
    constructor(contracts, loader, reducersMap = undefined, customState = undefined) {
        this._web3_loader = undefined;
        this._contracts = undefined;
        this._reducersMap = undefined;
        this._customState = undefined;
        this._store = undefined;
        this._network_ids = [];
        this._contracts = contracts;
        this._web3_loader = loader;
        this._reducersMap = reducersMap;
        this._customState = customState;
    }
    static factory(contracts, loader, reducersMap = undefined, customState = undefined) {
        return (Vortex._instance || (Vortex._instance = new Vortex(contracts, loader, reducersMap, customState)));
    }
    static get() {
        return Vortex._instance;
    }
    /**
     * Run the Vortex Redux Store.
     */
    run() {
        if (this._contracts) {
            if (this._reducersMap) {
                this._store = generateStore_1.generateStore(this._contracts, this._reducersMap, this._customState);
            }
            else {
                this._store = generateStore_1.generateStore(this._contracts);
            }
        }
        else {
            throw new Error("No Contracts Given");
        }
    }
    /**
     * Load Web3 instance from given source.
     * @param {Promise<any>} source The source that returns an instance when resolved.
     */
    loadWeb3() {
        if (this._store) {
            this._store.dispatch(web3_actions_1.Web3Load(this._web3_loader));
        }
        else {
            throw new Error("Call run before.");
        }
    }
    /**
     * Add a new contract in contract list.
     *
     * @param {} contract Contract to add.
     */
    addContract(contract) {
        if (this._contracts === undefined) {
            this._contracts = [];
        }
        this._contracts.push(contract);
    }
    /**
     * Adds a network id to whitelist.
     *
     * @param {number} network_id Network Id to add.
     */
    addNetwork(network_id) {
        this._network_ids.push(network_id);
    }
    /**
     * Add a new reducer in the Reducer Map.
     *
     * @param {string} field Field Name associated with reducer.
     * @param {Reducer<any, any>} reducer Reducer
     */
    addReducer(field, reducer) {
        if (this._reducersMap === undefined) {
            this._reducersMap = {};
        }
        this._reducersMap[field] = reducer;
    }
    /**
     * Custom Initial State, useful when adding custom properties.
     *
     * @param {DeepPartial<T extends State>} customState
     */
    setCustomState(customState) {
        this._customState = customState;
    }
    /**
     * Contracts getter
     *
     * @returns {ContractArtifact[]} Array of loaded artifacts.
     */
    get Contracts() {
        return (this._contracts);
    }
    /**
     * Store getter
     *
     * @returns {Store<T extends State>} Instance of Store
     */
    get Store() {
        if (!this._store)
            throw new Error("Call run before");
        return (this._store);
    }
}
Vortex._instance = undefined;
exports.Vortex = Vortex;
