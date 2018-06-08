"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge_1 = require("./forge");
const web3_actions_1 = require("./web3/web3.actions");
const contracts_actions_1 = require("./contracts/contracts.actions");
const accounts_actions_1 = require("./accounts/accounts.actions");
class Vortex {
    /**
     * Instantiate a new Vorte instance.
     * Accessing VortexInstance will give access to the last instanciated Vortex.
     *
     * @param {ContractConfig} contracts Truffle or Embark Contracts configuration.
     * @param loader Promise that returns a web3 instance ready to be used.
     * @param {GeneratorConfig<T>} config Configuration arguments for the store generator.
     */
    constructor(contracts, loader, config = undefined) {
        this._web3_loader = undefined;
        this._contracts = undefined;
        this._config = {};
        this._store = undefined;
        this._network_ids = [];
        this._contracts = contracts;
        this._web3_loader = loader;
        this._config = config || {};
    }
    static factory(contracts, loader, config = undefined) {
        return (Vortex._instance || (Vortex._instance = new Vortex(contracts, loader, config)));
    }
    static get() {
        return Vortex._instance;
    }
    /**
     * Run the Vortex Redux Store.
     */
    run() {
        if (this._contracts) {
            this._store = forge_1.forge(this._contracts, this._config);
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
            this._store.dispatch(web3_actions_1.Web3Load(this._web3_loader, this._network_ids));
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
            throw new Error("Invalid Contracts !");
        }
        switch (this._contracts.type) {
            case 'truffle':
                this._contracts.truffle_contracts.push(contract);
                break;
            case 'embark':
                // TODO Fix this
                this._contracts.embark_contracts.push(contract);
                break;
            case 'manual':
                // TODO Fix this
                break;
            default:
                throw new Error("Invalid Contracts !");
        }
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
     *  Takes a Truffle Contract Artifact and extracts all network ids where Contract has instances, adds them to whitelist
     *  If you are using Embark, Network checks will be done depending on your chains.json.
     *
     * @param {any} contract A Truffle Contract Artifact
     */
    networksOf(contract) {
        this._network_ids = this._network_ids.concat(Object.keys(contract.networks).map((val) => parseInt(val)));
    }
    /**
     * Add a new reducer in the Reducer Map.
     *
     * @param {string} field Field Name associated with reducer.
     * @param {Reducer<any, any>} reducer Reducer
     */
    addReducer(field, reducer) {
        if (this._config.reducer === undefined) {
            this._config.reducer = {};
        }
        this._config.reducer[field] = reducer;
    }
    /**
     * Custom Initial State, useful when adding custom properties.
     *
     * @param {DeepPartial<T extends State>} customState
     */
    setCustomState(customState) {
        this._config.custom_state = customState;
    }
    /**
     * Load a new instance of a Smart Contract. Expect a new Feed element and
     * the contracts section to get updated.
     *
     * @param {string} contractName
     * @param {string} contractAddress
     */
    loadContract(contractName, contractAddress) {
        if (this._store) {
            this._store.dispatch(contracts_actions_1.ContractLoad(contractName, contractAddress));
        }
        else {
            throw new Error("Call run before.");
        }
    }
    /**
     * Add a new contract to fetch pool.
     *
     * @param {string} address Address to fetch
     */
    subscribeAccount(address) {
        if (this._store) {
            this._store.dispatch(accounts_actions_1.AccountAdd(address));
        }
        else {
            throw new Error("Call run before.");
        }
    }
    /**
     * Contracts getter
     *
     * @returns {ContractConfig} Array of loaded artifacts.
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
    /**
     * Network Id Whitelist getter.
     *
     * @returns {number[]} List of whitelisted network ids.
     */
    get Networks() {
        return (this._network_ids);
    }
}
Vortex._instance = undefined;
exports.Vortex = Vortex;
