import React, { Component } from 'react';
import './App.css';
import { TxsShowcase }      from './txs_showcase/TxsShowcase';
import Title                from './Title';
import { StatusManager }    from './status_management/StatusManager';
import { AccountsShowcase } from './accounts_management/AccountsShowcase';
import { Grid, Box }             from 'grommet';

class App extends Component {
    render(): React.ReactNode {
        return (
            <div className='Demo'>
                <StatusManager>
                    <Title/>
                    <TxsShowcase/>
                    <AccountsShowcase/>
                </StatusManager>
            </div>
        );
    }
}

export default App;
