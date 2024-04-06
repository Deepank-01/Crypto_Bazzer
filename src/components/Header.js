import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React from 'react'




function Header() {

    const useStyles=makeStyles(()=>({
        title:{
          
            color:"gold",
            cursor:"pointer",
        }
    }))

    const classes=useStyles();
    const darkTheme=createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            type:"dark",
        },
    });
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position='static' >
    <Container>
    <Toolbar >
        <Typography className={classes.title} variant='h5'  >
            Cryto prediction
        
        <Select variant='outlined'
        style={{
            width:100,
            height:40,
            marginLeft:50,
           
        }}
        >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
        </Select>
        </Typography>
    </Toolbar>
    </Container>

    </AppBar>
    </ThemeProvider>

  )
}

export default Header