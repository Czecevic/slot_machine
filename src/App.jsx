import React from "react"

class App extends Component {
    static defaultProps = {
        result: ["A", "B", "C", "D", "E", "F"]
    };
    constructor(props) {
        super(props);
        this.state = { result1: "A", result2: "A", result3: "A", rolling: false };

        this.slotRef = [createRef(), createRef(). createRef()];
    }

    rool = () => {
        this.setState({
            rolling: true
        });
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 700);

        this.slotRef.forEach((slot, i) => {
            const selected = this.triggerSlotRotation(slot.current);
            this.setState({[`result${i + 1}`]: selected})

        })
    }
}

export default App;
