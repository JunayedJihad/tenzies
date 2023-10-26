import React from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

const App = () => {

  const imgArray = [
    "./dice.png",
    "./dice (1).png",
    "./dice (2).png",
    "./dice (3).png",
    "./dice (4).png",
    "./dice (5).png"
  ];

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false)
  const[count,setCount]=React.useState(0)

  React.useEffect(() => {

    const allHeld = dice.every(die => die.isHeld)
    const anyValue = dice[1].value
    const allSameValue = dice.every(die => die.value === anyValue)
    if (allHeld && allSameValue) {
       setTenzies(true);

    }


  },[dice])

  function handleClick() {
    setCount((prev) => prev + 1);
    if (!tenzies) {

      setDice(prevDice => prevDice.map(eachDice =>
          eachDice.isHeld?eachDice:generateDice()
      ));


    } else {
      setTenzies(false)
      setDice(allNewDice())
      setCount(0)
    }
  }

  function holdDice(id) {
    // console.log(id);
    setDice((oldDice) =>
      oldDice.map((eachDice) => {
        return eachDice.id === id
          ? { ...eachDice, isHeld: !eachDice.isHeld }
          : eachDice;
      })
    );
  }

  function generateDice() {
    return {
      value: imgArray[Math.floor(Math.random() * 6)],
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    let noArr = [];
    for (let i = 0; i < 10; i++) {
      noArr.push(generateDice());
    }

    return noArr;
  }

  let diceElements = dice.map((item) => (
    <Dice
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      holdDice={() => {
        holdDice(item.id);
      }}
    />
  ));




  return (
    <main>
      {tenzies && <Confetti width="1425" />}
      <div className="info text-center ">
        <h3 className="display-4">Tenzies</h3>
        <p className="lead">
          Roll untill all the dice are same.Click each die to freeze it at its
          current value between rolls
        </p>
        {tenzies && <p className=" fst-italic text-decoration-underline  lead trialNo">You have Won in {count} trials!!</p>}
      </div>

      <div className="dice-container">{diceElements}</div>
      <button
        className="button btn btn-primary fw-bold text-center px-4"
        onClick={handleClick}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
};

export default App;
