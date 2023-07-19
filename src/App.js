import React from "react";

class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                style={{ backgroundColor: this.props.backgroundColor }}
                onClick={this.props.onClick}
            ></button>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColorA: "red",
            backgroundColorB: "blue",
        };
    }

    handleClick = () => {
        const newColorA = this.state.backgroundColorA === "red" ? "blue" : "red";
        const newColorB = this.state.backgroundColorB === "red" ? "blue" : "red";
        this.setState({
            backgroundColorA: newColorA,
            backgroundColorB: newColorB,
        });
    };

    render() {
        return (
            <div>
                <Square
                    backgroundColor={this.state.backgroundColorA}
                    onClick={this.handleClick}
                />
                <Square
                    backgroundColor={this.state.backgroundColorB}
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default App;
