import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import MachineWidget from '../Widgets/MachineWidget';
import SandwichWidget from '../Widgets/SandwichWidget'

const useStyle = makeStyles ( {

    container: {
        height : "100vh",
    },

    item: {
        height : "25vh"
    },

    paper: {
        height: "25vh",
        // padding: 1,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        textAlign:"center",
      }
});

const Board = () => {
    const classes = useStyle();
    let gridy = [...Array(16).keys()];
    gridy.shift()
    gridy.shift()




    return (
        
        <Container className= {classes.container} maxWidth = {false}>
            {console.log("grydy")}
            <Grid container  spacing = {0} >

            <Grid className = {classes.item} item xs ={12} md = {12} lg = {3}> 
                <MachineWidget/>
            </Grid>

            <Grid className = {classes.item} item xs ={12} md = {12} lg = {3}> 
                <SandwichWidget/>
            </Grid>
            
            {gridy.map(x => {

                if ([2,3,6,7].includes(x)) {
                    
                    return(

                        <Grid item xs ={12} md = {12} lg = {3}> 
                            <Paper variant = "outlined" className = {classes.paper}>
                                <div style={{background:"red"}}>
                                    {x}
                                </div>
                                
                                </Paper>
                        </Grid>
                    )

                } else {

                    return(

                        <Grid item xs ={12} md = {12} lg = {3}> 
                            <Paper variant = "outlined" className = {classes.paper}>{x}</Paper>
                        </Grid>
                    )

                }

                })}

            </Grid>
        </Container>
    )
}

export default Board
