import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { ReactComponent as Wordcloud } from '../img/wordcloud.svg';
import { ReactComponent as Wordcloudsm } from '../img/wordcloudsm.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../stylesheets/landing.css';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    overflow: 'visible',
}));


export default function Landing() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ flexGrow: 1 }} mt={10}>
            <Grid container justifyContent="center" spacing={4} mb={1}>
                <Grid item xs={11} md={10} lg={8}>
                    <Item elevation={0} align='left'><h1><span id={"welcome"}>Welcome<br></br>to </span><span id={"to-folksprak"}>Folksprak<span id={"folksprak"}>.</span></span></h1></Item>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={11} md={6} lg={5}>
                    <Item elevation={0} align="left" id={"introductory"} >
                        <p>— a collaborative project that aims to construct an inter-Germanic zonal auxlang, a language that can be easily understood by any speaker of a Germanic language.
                            First proposed by Stephan Schneider, it is currently a collective work created by all interested parties.</p>

                        <p>Folksprak is analogous to the &ldquo;real&rdquo; modern Germanic languages, because its phoneme inventory is based on reconstructed Proto-Germanic with phoneme shifts following those seen in the development of modern Germanic.
                            Its original scope was to provide an inter-Germanic orthography based on reconstructed Proto-Germanic.</p>
                    </Item>
                </Grid>
                <Grid item xs={11} md={4} lg={3}>
                    <Item elevation={0}>
                        {matches ? <Wordcloudsm /> : <Wordcloud />}</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
