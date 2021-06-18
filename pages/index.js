import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const AnimePage = ({ data }) => {

    const styles = {
        root: {
            background: "radial-gradient(ellipse at center," +
                "#808080" +
                " 0," +
                "#000000" +
                " 100%)",
            height: 'auto',
            width: '100%',
            margin: '0, 0'

        },
        header: {
            backgroundColor: 'grey'
        },
        card: {
            width: '100%',
            maxWidth: '350px',
            height: 'auto',
            border: 'solid 1px grey',
            backgroundColor: 'darkgrey'
        },
        cardContainer: {
            display: 'flex',
            padding: '2%'
        },
        title: {
            backgroundColor: 'green'
        },
        description: {
            backgroundColor: 'white'
        }

    }

    return (
        <Paper style={styles.root}>
            <Grid container spacing={3} justify='center' >
                <Grid item xs={12} style={styles.header}>
                    <Typography variant='h2' align='center'>
                        Welcome to the Anime Page
                    </Typography>
                    <Typography variant='caption' align='right'>
                        Powered by <b>Rakeem G.</b>
                    </Typography>
                </Grid>

                <Grid item align='center' >
                    <Grid container justify='center'>
                        {data?.Page?.media.map(animeObj => (
                            < div style={styles.cardContainer} key={animeObj.id} >
                                < div style={styles.card}  >
                                    <img src={animeObj.coverImage.large} />
                                    <p style={styles.title}> <b>{animeObj.title.english}</b> </p>
                                    <em ><p >{animeObj.description}</p></em>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    )
}

export default AnimePage

export const getServerSideProps = async () => {

    try {
        let res = await fetch("http://localhost:3000/api/handler");
        let data = await res.json()

        return {
            props: data
        }
    } catch (err) {
        console.error(err);
        return {
            props: {}
        }
    }
}






