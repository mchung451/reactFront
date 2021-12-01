import React from "react";


    class Button extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            clickNumber: 0,
        };
        }
    
        handleClick(event) {
        event.preventDefault();
        this.setState({
            clickNumber: (this.state.clickNumber += 1),
        });
        }

        render() {
            return (
            <div>
                <h3>Button example</h3>
                <button onClick={(event) => this.handleClick(event)}>
                example button
                </button>
                <p>
                <b>you have clicked the button {this.state.clickNumber} time/s</b>
                </p>
            </div>
            );
        }
    }

    export default Button