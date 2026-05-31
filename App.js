import './App.css';
import React,{useState} from 'react';

function App() {

  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState('');
  const [color, setcolor] = useState('');

  // logic

  let calcBmi = (e) => {

    e.preventDefault();

    if(weight === 0 || height === 0){

      alert("Please Enter a Valid Weight and Height");

    }
    else {

      let bmi = (weight / (height * height) * 703)

      setbmi(bmi.toFixed(1))

      if(bmi < 18.5){

        setmessage("You are under weight")
        setcolor("blue")

      }
      else if(bmi >= 18.5 && bmi < 25){

        setmessage("You are healthy weight.")
        setcolor("green")

      }
      else{

        setmessage("You are over weight")
        setcolor("red")

      }
    }

  }

  // reload

  let reload = () => {
    window.location.reload()
  }

  return (

    <div className='app'>

      <div className='container'>

        <h2>BMI Calculator</h2>

        <form onSubmit={calcBmi}>

          <div>
            <label>Weight (lbs)</label>

            <input
              type='number'
              placeholder='Enter your Weight Value Please'
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (inches)</label>

            <input
              type='number'
              placeholder='Enter your Height Value Please'
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>

          <div className='btn-main-container'>

            <button className='btn' type='submit'>
              Submit
            </button>

            <button
              className='btn btn-outline'
              onClick={reload}
              type='button'
            >
              Reload
            </button>

          </div>

          <div className='center'>
            <h3>Your BMI is : {bmi}</h3>

            <p style={{color: color}}>
              {message}
            </p>

          </div>

        </form>

      </div>

    </div>

  );
}

export default App;