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
              My name is Alex Bechmann, i am a 27 year old, skilled full-stack web developer from Silkeborg Denmark. I
              grew up in Suffolk, United Kingdom and moved to Denmark in 2009 to go to højskole and begin my studies.
            </Typography>
            <Typography paragraph>
              I have a passion for writing clean, understandable, well architectured code on both the front and backend.
              I always keep up to date with the industry trends, and continuously look for ways to improve my skills as
              a web developer.
            </Typography>
            <Typography paragraph>
              I am comfortable collaborating with other people in a SCRUM team, as well as by myself on solo projects.
            </Typography>
            <Typography paragraph>I speak fluent English & Danish, written as well as spoken.</Typography>
            <Typography paragraph>
              Outside work i love to swim, play music, code my side projects & look after my daughter!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
              Technical skills
            </Typography>
            <List>
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
          Experience
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
