import React from "react";
import {
  Theme,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Chip
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme: Theme) => ({
  card: {},
  cardContent: {
    paddingBottom: 0
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  chip: {
    marginRight: theme.spacing(),
    marginBottom: theme.spacing(),
    height: "20px"
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
  tags: string[];
  location: string;
}

const JobCard: React.ComponentType<JobCardProps> = ({
  location,
  companyName,
  role,
  description,
  timespan,
  color,
  url,
  tags
}) => {
  const classes = useStyles({});
  return (
    <Card className={classes.card} elevation={12}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: color }}>{companyName[0]}</Avatar>
        }
        title={`${role} at ${companyName} (${location})`}
        subheader={timespan}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          paragraph
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        {tags.map(tag => (
          <Chip key={tag} className={classes.chip} label={tag} />
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton target="_blank" href={url}>
          <LanguageIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default JobCard;
