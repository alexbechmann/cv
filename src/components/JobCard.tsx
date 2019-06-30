import React, { useState } from 'react';
import {
  createStyles,
  Theme,
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
  ListItem,
  List,
  ListItemText,
  Divider
} from '@material-ui/core';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

export interface JobCardProps {
  companyName: string;
  role: string;
  description: string;
  timespan: string;
  color: string;
  url: string;
  tasks: { primaryText: string; secondaryText: string }[];
}

const JobCard: React.ComponentType<JobCardProps> = ({
  companyName,
  role,
  description,
  timespan,
  color,
  url,
  tasks
}) => {
  const classes = useStyles({});
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <Card className={classes.card} elevation={12}>
      <CardHeader
        avatar={<Avatar style={{ backgroundColor: color }}>{companyName[0]}</Avatar>}
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${role} at ${companyName}`}
        subheader={timespan}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton target="_blank" href={url}>
          <LanguageIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle2">What i worked on</Typography>
          <List dense>
            {tasks
              .map(task => {
                return (
                  <ListItem>
                    <ListItemText primary={task.primaryText} secondary={task.secondaryText} />
                  </ListItem>
                );
              })
              .reduce((acc, x) => (acc === null ? [x] : ([acc, <Divider component="li" />, x] as any)), null)}
          </List>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};

export default JobCard;
