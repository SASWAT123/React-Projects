import React, { Component } from 'react';
class Basic extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false
        }
        this.getView = this.getView.bind(this);
        this.updateBasic = this.updateBasic.bind(this);
    }
    updateBasic() {
        this.props.updateBasic(this.state.basic);
    }

    getView() {
        if (this.state.isEdit)
            return (
                <div>
                    <input type="text" id="txt"
                        onChange={(e) => this.setState({ basic: e.target.value })} />
                    <button type="button" onClick={() => {

                        this.setState({ isEdit: false });
                        this.updateBasic();
                    }}>
                        &#10004;</button>
                    <button type="button" onClick={() => this.setState({ isEdit: false })}>&#10006;</button>
                </div>);
             else
                return <div onDoubleClick={() => this.setState({ isEdit: true })}>
                    {this.props.basic}
                </div>;

    }
    render() {

        return (
            this.getView()


        );
    }
}
export default Basic;

