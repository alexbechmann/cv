import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from './components/Layout';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  CssBaseline,
  Link
} from '@material-ui/core';
import { DiReact, DiGit, DiNodejsSmall, DiMongodb, DiMsqlServer, DiVisualstudio, DiDocker } from 'react-icons/di';
import TypescriptIcon from './components/icons/Typescript';
import GraphQL from './components/icons/GraphQL';
import Experience from './components/Experience';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

const App = () => {
  const classes = useStyles({});
  return (
    <Layout>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5" gutterBottom>
              About
            </Typography>
            <Typography paragraph>
              My name is Alex Bechmann, a 27 year old full-stack web developer from Silkeborg. I grew up in Suffolk,
              United Kingdom and moved to Denmark in 2010 to study for a Bachelor degree in Web Development.
            </Typography>
            <Typography paragraph>
              I have a passion for writing clean, easily understood and well architectured code on both front and
              back-end environments. I work hard to keep up to date with industry trends, and continuously look for ways
              to improve my skills as a developer.
            </Typography>
            <Typography paragraph>
              I am equally comfortable collaborating with others in a team, as I am working solo on projects.
            </Typography>
            <Typography paragraph>My native language is English, and I also speak Danish fluently.</Typography>
            <Typography paragraph>
              Outside of work I love to swim, play music, learn new coding skills by working on side projects & spending
              time with my family!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
              Technical skills include
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <TypescriptIcon
                    style={{
                      marginLeft: 4
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="TypeScript" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DiReact size={32} />
                </ListItemIcon>
                <ListItemText primary="React" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DiNodejsSmall size={32} />
                </ListItemIcon>
                <ListItemText primary="NodeJS" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DiGit size={32} />
                </ListItemIcon>
                <ListItemText primary="Git workflows" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DiVisualstudio size={32} />
                </ListItemIcon>
                <ListItemText primary=".NET Core" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DiMsqlServer size={32} />
                </ListItemIcon>
                <ListItemText primary="SQL" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DiMongodb size={32} />
                </ListItemIcon>
                <ListItemText primary="NoSQL" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DiDocker size={32} />
                </ListItemIcon>
                <ListItemText primary="Docker" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GraphQL
                    style={{
                      marginLeft: 4
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="GraphQL" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography gutterBottom variant="h5">
          Professional experience
        </Typography>
        <Experience />
        <Divider className={classes.divider} />
        <Typography paragraph>
          Please{' '}
          <Link color="secondary" href="mailto:alex.bechmann@outlook.com">
            contact me
          </Link>{' '}
          for references & exam documents.
        </Typography>
      </Container>
    </Layout>
  );
};

export default App;
