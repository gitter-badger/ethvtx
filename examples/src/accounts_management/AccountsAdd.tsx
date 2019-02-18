import React          from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    Form,
    FormGroup,
    FormInput,
}                     from 'shards-react';
import { State }      from 'ethvtx/lib/state';
import { Dispatch }   from 'redux';
import { addAccount } from 'ethvtx/lib/dispatchers';
import { connect }    from 'react-redux';

interface IAccountsAddProps {
    add?: (address: string) => void;
}

interface IAccountsAddState {
    address: string;
}

export class AccountsAddRaw extends React.Component<IAccountsAddProps, IAccountsAddState> {

    state: IAccountsAddState = {
        address: ''
    };

    constructor(props: IAccountsAddProps) {
        super(props);

        this.handleAddressInput = this.handleAddressInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleAddressInput(e: any): void {
        this.setState({address: e.target.value});
    }

    handleButtonClick(): void {
        this.props.add!(this.state.address);
    }

    render(): React.ReactNode {
        return (
            <div>
                <Card>
                    <CardHeader>Add Address</CardHeader>
                    <CardBody>
                        <p>Add address to follow their balance and transaction count</p>
                        <Form>
                            <FormGroup>
                                <label htmlFor="#to">Address</label>
                                <FormInput id="#to" placeholder="address" onChange={this.handleAddressInput}/>
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.handleButtonClick} outline theme="dark">
                                    Add Account
                                </Button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state: State): IAccountsAddProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): IAccountsAddProps => ({
    add: (address: string): void => addAccount(dispatch, address)
});

export const AccountsAdd = connect(mapStateToProps, mapDispatchToProps)(AccountsAddRaw);
