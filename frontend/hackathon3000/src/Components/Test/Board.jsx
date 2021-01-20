import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles ( {

    container: {
        height : "100vh",
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
    const gridy = [...Array(16).keys()];


    return (
        
        <Container className= {classes.container} maxWidth = {false}>
            {console.log("grydy")}
            <Grid container  spacing = {0} >
            
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
