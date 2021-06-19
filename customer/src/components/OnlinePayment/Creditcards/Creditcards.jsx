
import Form from 'react-bootstrap/Form';
//import '../calendar/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Paper } from '@material-ui/core'

function Creditcards(){
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const paperStyle={padding :20,height:'170vh',width:1000, margin:"20px auto", backgroundColor:'#ff9933'}

    return(
        <div>
            <Paper elevation={10} style={paperStyle}>
<Cards
cvc={cvc}
expiry={expiry}
focused={focus}
name={name}
number={number}
/>
  <Form>
    <input
    type="tel"
    name="number"
    val={number}
    placeholder="enter Number"
    onChange={e=>setNumber(e.target.value)}
    onFocus={e=>setFocus(e.target.name)}
    />

    <input
    type="tel"
    name="name"
    val={name}
    placeholder="enter name"
    onChange={e=>setName(e.target.value)}
    onFocus={e=>setFocus(e.target.name)}
    />


    <input
    type="tel"
    name="expiry"
    val={expiry}
    placeholder="enter expiry"
    onChange={e=>setExpiry(e.target.value)}
    onFocus={e=>setFocus(e.target.name)}
    />


    <input
    type="tel"
    name="cvc"
    val={cvc}
    placeholder="enter cvc"
    onChange={e=>setCvc(e.target.value)}
    onFocus={e=>setFocus(e.target.name)}
    />
    </Form>
    </Paper>
</div>       
    )
}
export default Creditcards;