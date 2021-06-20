import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';






const AnimePage = ({ data }) => {

    const [pageNum, setPageNum] = useState(1);
    let animePerPage = 9;
    let animeDisplayed = pageNum * animePerPage;
    let pageCount = Math.floor(data?.Page?.media.length / animePerPage);



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
        },
        paginationContainer: {
            backgroundColor: 'grey',
        }

    };


    console.log(data, 'data coming in')
    const animeList = data?.Page?.media.slice(animeDisplayed, animeDisplayed + animePerPage).map((animeObj) => (
        < div style={styles.cardContainer} key={animeObj.id} data-cy={"animeContainer"} >
            < div style={styles.card}  >
                <img src={animeObj.coverImage.large} />
                <p style={styles.title} > <b data-cy={`animeTitle`}>{animeObj.title.english}</b> </p>
                <em ><p data-cy={`animeDescription`}>{animeObj.description}</p></em>
            </div>
        </div>
    ));

    return (
        <Paper style={styles.root}>
            <Grid container spacing={3} justify='center' alignItems='center' >
                <Grid item xs={12} style={styles.header} align='center'>
                    <Typography variant='h2' align='center'>
                        Welcome to the Anime Page
                    </Typography>
                    <Typography variant='caption' >
                        Powered by <b>Rakeem G.</b>
                    </Typography>
                </Grid>
                <Grid item align='center' >
                    <Grid container justify='center'>
                        {animeList}
                    </Grid>
                </Grid>
                <Grid item xs={12} style={styles.paginationContainer} align='center'>
                    <Grid container justify='center'>
                        <Pagination
                            data-cy="pagination"
                            variant='outlined'
                            color='primary'
                            onChange={(e, value) => setPageNum(value)}
                            defaultPage={1}
                            page={pageNum}
                            count={pageCount}
                        />
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
        let data = await res.json();
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






