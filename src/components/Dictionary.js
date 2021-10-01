import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import '../stylesheets/dictionary.css';
import * as json from "../data/dict.json"


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

function Load() {
    return json ? (
        <ul id='ul-words'>{(json['words']).map((element, index) => {
            return <li key={index}><span id='folksprak-word'>{element.word}</span> [<span id='folksprak-attribute'>{element.attribute}</span>] — {element.translations.join(', ')}</li>
          })}</ul>
    ):(
        <p>Data loading failed.</p>
    )
}

export default function Dictionary() {
    return (
        <><Box sx={{ flexGrow: 1 }} mt={2}>
            <Grid container justifyContent='center' spacing={4} mb={1}>
                <Grid item xs={11} md={10} lg={8}>
                    <Item elevation={0} align='left'><Load/></Item>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}