import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        display: 'flex'
    },
    grid: {
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'center'
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: '0 auto'
    }
}));

function About() {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid} spacing={2}>
            <Card className={classes.root} type="div">
                <CardActionArea>
                    <Avatar alt="Andriamihaja Wahid" className={classes.large} src={"https://media.licdn.com/dms/image/D4D03AQHoU5TvWuKwkQ/profile-displayphoto-shrink_800_800/0/1688925980057?e=1711584000&v=beta&t=SCmyWuQbzGGx-WBHzO9LMst7ZoBkasFQ7KpSr-HnEts"} />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            RANAIVOSON Andriamihaja Wahid Gérard
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            email :  <br /> ranaiawg@gmail.com
          </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

        </Grid>
    )
}

export default About;