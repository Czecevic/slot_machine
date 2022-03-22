import React, { ReactDOM } from "react";
import "./dababy.mp3";
import "./App.css";

const { createRef, Component } = React;

class Slots extends Component {
  static defaultProps = {
    text: [["ouïe", "toucher", "odorat", "la vue", "goût"], ["ouïe1", "toucher1", "odorat1", "la vue1", "goût1"], ["ouïe2", "toucher2", "odorat2", "la vue2", "goût2"]]
  };
  constructor(props) {
    super(props);
    this.state = { text1: "0", text2: "0", text3: "0", rolling: false };

    this.slotRef = [createRef(), createRef(), createRef()]
  }

  Sound = () => {

  }

  roll = () => {
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({rolling: false});
    }, 700);

    this.slotRef.forEach((slot, i) => {
      const selected = this.triggerSlotRotation(slot.current);
      this.setState({ [`text${i + 1}`]: selected});
    });
  };
  getRandomInt = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  triggerSlotRotation = ref => {
    this.getRandomInt(1,20)
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(
      Math.random() * Slots.defaultProps.text.length
    );
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return Slots.defaultProps.text[randomOption];
  };
  render() {
    return (
      <div className="SlotMachine">
        <div className="slot">
          <section>
            <div className="container" ref={this.slotRef[0]}>
              {Slots.defaultProps.text[0].map((texte, i ) => (
                <div key={i}>
                  <span>{texte}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="slot">
          <section>
            <div className="container" ref={this.slotRef[1]}>
              {Slots.defaultProps.text[1].map((texte, i ) => (
                <div>
                  <span>{texte}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="slot">
          <section>
            <div className="container" ref={this.slotRef[2]}>
              {Slots.defaultProps.text[2].map((texte, i) => (
                <div>
                  <span>{texte}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div
          className={!this.state.rolling ? "roll rolling" : "roll"}
          onClick={!this.state.rolling && this.roll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling..." : "ROLL"}
        </div>
      </div>
    );
  }
}

export default Slots;