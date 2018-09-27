import React, { Component } from 'react';
class HRA extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false
        }
        this.getView = this.getView.bind(this);
        this.updateHRA = this.updateHRA.bind(this);
    }
    updateHRA() {
        this.props.updateHRA(this.state.hra);
    }

    getView() {
        if (this.state.isEdit)
            return (
                <div>
                    <input type="text" id="txt"
                        onChange={(e) => this.setState({ hra: e.target.value })} />
                    <button type="button" onClick={() => {

                        this.setState({ isEdit: false });
                        this.updateHRA();
                    }}>
                        &#10004;</button>
                    <button type="button" onClick={() => this.setState({ isEdit: false })}>&#10006;</button>
                </div>);
             else
                return <div onDoubleClick={() => this.setState({ isEdit: true })}>
                    {this.props.hra}
                </div>;

    }
    render() {

        return (
            this.getView()

        );
    }
}
export default HRA;

