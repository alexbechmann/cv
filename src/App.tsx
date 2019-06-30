import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Layout from "./components/Layout";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  Divider,
  CssBaseline
} from "@material-ui/core";
import {
  DiReact,
  DiGit,
  DiNodejsSmall,
  DiMongodb,
  DiMsqlServer,
  DiVisualstudio,
  DiDocker,
  DiJsBadge
} from "react-icons/di";
import TypescriptIcon from "./components/icons/Typescript";
import GraphQL from "./components/icons/GraphQL";
import Experience from "./components/Experience";

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing()
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
              My name is Alex Bechmann, i am a skilled full-stack web developer
              from Silkleborg Denmark. I grew up in Ipswich, United Kingdom and
              moved to Denmark in 2009 to go to højskole and study.
            </Typography>
            <Typography paragraph>
              I have a passion for writing clean, well architectured code
              throughout the full stack.
            </Typography>
            <Typography paragraph>
              I speak fluent English & Danish, written as well as spoken.
            </Typography>
            <Typography paragraph>
              Outside work i love to swim, play music, code my side projects &
              look after my daughter! :)
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
              Skills & interests
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <TypescriptIcon style={{ marginLeft: 4 }} />
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
                  <GraphQL style={{ marginLeft: 4 }} />
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
      </Container>
    </Layout>
  );
};

export default App;
