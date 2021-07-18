import React,{useState} from 'react'
import { Container,Grid } from '@material-ui/core';


const App = () => {
    
    const[color,setColor] =useState('white');
    const handleChange = (e)=>{
        setColor(e.target.value);
       
    }
    return (
        <div>
            <Container>
                <Grid container alignItems = 'center'>
                    <Grid item xs={6}>
                       <img src={`images/${color}.jpeg`} alt={`${color} t shirt`} />
                        </Grid>
                    <Grid item xs={6} > 
                   <label>
                        Pick your favorite color:
                        <select value={color} onChange={handleChange}>
                            <option value="maroon">Maroon</option>
                            <option value="white">White</option>
                            <option value="red">Red</option>
                            
                        </select>
                    </label>
                    {color}
                    </Grid>
                
                
                </Grid>
            </Container>
        </div>
    )
}

export default App
