import React, { Component } from 'react';
import './App.css';
import { TxsShowcase }      from './txs_showcase/TxsShowcase';
import Title                from './Title';
import { StatusManager }    from './status_management/StatusManager';

class App extends Component {
    render(): React.ReactNode {
        return (
            <div className='Demo'>
                <StatusManager>
                    <Title/>
                    <TxsShowcase/>
                </StatusManager>
            </div>
        );
    }
}

export default App;
