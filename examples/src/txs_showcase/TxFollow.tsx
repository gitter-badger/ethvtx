import React                                  from 'react';
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
}                                             from 'shards-react';
import { State, TxInfos }                     from 'ethvtx/lib/state';
import { Dispatch }                           from 'redux';
import { followTransaction, sendTransaction } from 'ethvtx/lib/dispatchers';
import { connect }                            from 'react-redux';

interface ITXFollowProps {
    follow?: (hash: string) => number;
}

interface ITxFollowState {
    hash: string;
}

export class TxFollowRaw extends React.Component<ITXFollowProps, ITxFollowState> {

    state: ITxFollowState = {
        hash: ''
    };

    constructor(props: ITXFollowProps) {
        super(props);

        this.handleHashInput = this.handleHashInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleHashInput(e: any): void {
        this.setState({hash: e.target.value});
    }

    handleButtonClick(): void {
        this.props.follow!(this.state.hash);
    }

    render(): React.ReactNode {
        return (
            <div>
                <Card>
                    <CardHeader>Follow Transactions</CardHeader>
                    <CardBody>
                        <p>You can follow transaction statuses. Just input the hash of the transaction and all the informations will be fecthed in the store.</p>
                        <Form>
                            <FormGroup>
                                <label htmlFor="#to">Transaction Hash</label>
                                <FormInput id="#to" placeholder="hash" onChange={this.handleHashInput}/>
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={this.handleButtonClick} outline theme="dark">
                                    Follow Transaction
                                </Button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state: State): ITXFollowProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): ITXFollowProps => ({
    follow: (hash: string): number => followTransaction(dispatch, hash)
});

export const TxFollow = connect(mapStateToProps, mapDispatchToProps)(TxFollowRaw);
