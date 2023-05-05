import React, { useState } from 'react';
import Screen from './components/screen';
import Buttons from './components/button';
import './App.css';
const initialState = {
  first : 0,
  second: '0',
  mul: false,
  div: false,
  add: false,
  sub: false,
  per: false,
  neg: false,
  change: 0,
  equal: false,
  text: ''
};


function formatText( state )
{
  if(state.text.includes('=')){
    const myText = state.text.split(' ');
    myText[0] = state.second;
    return myText.join(" ");
  }else{
    return state.text + state.second + ' =';
  }
}
function result (state) {
  if(state.add === true)
  {
    if(state.change !== 0)
    {
      return parseFloat(state.first) + parseFloat(state.change);
    }else{
      
      return parseFloat(state.first) + parseFloat(state.second);
    }
   
  }else if(state.sub === true)
  {
    if(state.change !== 0)
    {
      return parseFloat(state.first) - parseFloat(state.change);
    }else{
      
      return parseFloat(state.first) - parseFloat(state.second);
    }
  }else if(state.mul === true)
  {
    if(state.change !== 0)
    {
      return state.first * state.change;
    }else{
      
      return state.first * state.second;
    }
  }else if(state.div === true)
  {
    if(state.change !== 0)
    {
      return state.first / state.change;
    }else{
      
      return state.first / state.second;
    }
  }
}
function bugFix( state )
{
  if((state.equal))
  {
    return 1;
  }else if((!state.equal) && (state.change === 0)){
    return 0;
  }
}
const App = () => {
  const [state, setState] = useState(initialState);
  return (
    <div className='container'>
      <div className='bg-dark space-top'>
        <Screen value = {state.text} direction = 'ltr'/>
        <Screen value = {state.second} direction = 'ltr'/>
        <Buttons value = { 'AC' } color={'but but-grey'} onPress = { () => {
          return '';
        }} />
        <Buttons value = { '+/-' } color={'but but-grey'} onPress = { () => {
          setState(state=> ({
            ...state,
            second: parseFloat(state.second) * (-1)
          }) );
        }} />
        <Buttons value = { '%' } color={'but but-grey'} onPress = { () => {
          setState(state=> ({
            ...state,
            second: parseFloat(state.second) * (0.01)
          }) );
        }} />
        <Buttons value = { '÷' } color={'but but-orange'} onPress = { () => {
          setState(state=> ({
            ...state,
            div: true,
            mul: false,
            add: false,
            sub: false,
            first: state.second,
            second: '0',
            text: state.second + ' ÷ ',
            change: 0
          }) );
        }} />
        <Buttons value = { 7 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '7',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '7',
            }));
            
        }}} />
        <Buttons value = { 8 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '8',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '8',
            }));
            
        }}} />
        <Buttons value = { 9 } color={'but but-grey'}onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '9',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '9',
            }));
            
        }}} />
        <Buttons value = { 'x' } color={'but but-orange'} onPress = { () => {
          setState(state=> ({
            ...state,
            div: false,
            mul: true,
            add: false,
            sub: false,
            first: state.second,
            second: '0',
            text: state.second + ' x ',
            change: 0
          }) );
        }} />
        <Buttons value = { 4 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '4',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '4',
            }));
            
        }}} />
        <Buttons value = { 5 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '5',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '5',
            }));
            
        }}} />
        <Buttons value = { 6 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '6',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '6',
            }));
            
        }}} />
        <Buttons value = { '+' } color={'but but-orange'} onPress = { () => {
          setState(state=> ({
            ...state,
            div: false,
            mul: false,
            add: true,
            sub: false,
            first: state.second,
            second: '0',
            text: state.second + ' + ',
            change: 0
          }) );
        }} />
        <Buttons value = { 1 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '1',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '1',
            }));
            
        }}} />
        <Buttons value = { 2 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '2',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '2',
            }));
            
        }}} />
        <Buttons value = { 3 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '3',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '3',
            }));
            
        }}} />
        <Buttons value = { '-' } color={'but but-orange'} onPress = { () => {
          setState(state=> ({
            ...state,
            div: false,
            mul: false,
            add: false,
            sub: true,
            first: state.second,
            second: '0',
            text: state.second + ' - ',
            change: 0
          }) );
        }} />
        <Buttons value = { 'C' } color={'but but-grey'} onPress = { () => {
          setState(state => ({
            ...state,
            second: '0',
            first: 0,
            text: '',
            change: 0
          }));
        }} />
        <Buttons value = { 0 } color={'but but-grey'} onPress = { () => {
          if(state.second === '0')
          {
            setState(state => ({
              ...state,
              second: '0',
            }));
            
          }else{
            setState(state => ({
              ...state,
              second: state.second + '0',
            }));
            
        }}} />
        <Buttons value = { '.' } color={'but but-grey'} onPress = { () => {
          let value = state.second;
          value = value.toString();
          if(!(value.includes('.', 0)))
          {
           
            setState(state => ({
              ...state,
              second: state.second + '.',
            }));
            
        }}} />
        <Buttons value = { '=' } color={'but but-orange'} onPress = { () => {
          let feedback = bugFix(state);
          if(feedback === 0)
          {
            setState(state => ({
              ...state,
              change:state.second, 
              second: result(state),
              first: result(state), 
              text: formatText(state),
              equal:true
            }));
          }else{
            setState(state => ({
              ...state,
              second: result(state),
              first: result(state), 
              text: formatText(state),
              equal:false
            }));
            
          }
        }} />
      </div>
    </div>
  );
}

export default App;
