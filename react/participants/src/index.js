import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Counter} from "./components/Counter/Counter";
import reportWebVitals from './reportWebVitals';
import {NoClock} from "./components/NoClock/NoClock";
import {ListNumbers} from "./components/ListNumbers/ListNumbers";
import {StringsList} from "./components/StringsList/StringsList";
import {Clock} from "./components/Clock/Clock";
import {FunClock} from "./components/Clock/FunClock";
import {NumberList} from "./components/ListNumbers/NumberList";
import {Forms} from "./components/Forms/Forms";
import {CrazyInput} from "./components/CrazyInput/CrazyInput";

import {ProgressBar} from "./components/Progressbar/ProgressBar";
import {AnimProgressBar} from "./components/Progressbar/AnimProgressBar";
import {Progressbar2} from "./components/Progressbar/Progressbar2";
import {AnimatedProgressBar2} from "./components/Progressbar/AnimatedProgressBar2";
import {ClickMe} from "./components/ClickMe/ClickMe";
import {PasswordInput} from "./components/PassTextInput/PasswordInput";
import {ColorSquare} from "./components/ColorSquare/ColorSquare";
import {PassTextInput} from "./components/PassTextInput/PassTextInput";
import {ThreeColorsLed} from "./components/ThreeColorsLed/ThreeColorsLed";
import {ListElements} from "./components/ListElements/ListElements";
import Users from './data/people.json';
import {MyUsersList} from "./components/MyUsersList/MyUsersList";
import {App} from "./App";
import {FormsExercise} from "./components/Forms/FormsExercise";

ReactDOM.render(
  <React.StrictMode>
      {/*<StringsList list={[1, 2, 3]}/>*/}
      {/*<Counter/>*/}
      {/*<Clock/>*/}
      {/*<FunClock/>*/}
      {/*<ListNumbers />*/}
      {/*<NoClock/>*/}
      {/*<NumberList/>*/}
      {/*<Forms/>*/}
      {/*<FormsExercise/>*/}
      {/*<CrazyInput/>*/}
      {/*<Progressbar percent={0}/>*/}
      {/*<AnimProgressBar/>*/}
      {/*<Progressbar2 percentage={10}/>*/}
      {/*<AnimatedProgressBar2/>*/}
      {/*<ClickMe/>*/}
      {/*<PasswordInput/>*/}
      {/*<ColorSquare/>*/}
      {/*<PassTextInput/>*/}
      {/*<ThreeColorsLed/>*/}
      {/*<ListElements list={['pierwszy', 2, 'trzeci']}/>*/}
      {/*<MyUsersList list={Users}/>*/}
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
