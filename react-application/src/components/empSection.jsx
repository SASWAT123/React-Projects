import React, { Component } from 'react';
class Name extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false
        }
        this.getView = this.getView.bind(this);
        this.updateName = this.updateName.bind(this);
    }
    updateName() {
        this.props.updateName(this.state.empName);
    }

    getView() {
        if (this.state.isEdit)
            return (
                <div>
                    <input type="text" id="txt"
                        onChange={(e) => this.setState({ empName: e.target.value })} />
                    <button type="button" onClick={() => {

                        this.setState({ isEdit: false });
                        this.updateName();
                    }}>
                        &#10004;</button>
                    <button type="button" onClick={() => this.setState({ isEdit: false })}>&#10006;</button>
                </div>);
             else
                return <div onDoubleClick={() => this.setState({ isEdit: true })}>
                    {this.props.empName.toUpperCase()}
                </div>;

    }
    render() {

        return (
            this.getView()


        );
    }
}
export default Name;

