import React from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Container,
  Slide
} from "@material-ui/core";
import JobCard, { JobCardProps } from "./JobCard";
import ExperienceDivider from "./ExperienceDivider";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const jobs: JobCardProps[] = [
  {
    companyName: "Danfoss",
    role: "Web & CMS Consultant",
    description: "I work as a full stack developer & DevOps ...",
    timespan: "Jan 2016 - Present",
    color: "#e2000f",
    url: "https://www.danfoss.com/",
    tasks: []
  },
  {
    companyName: "Farlon",
    role: ".NET Developer",
    description:
      "I was responsible for the development of a web app to import, manipulate & export customer data.",
    timespan: "Aug 2016 - Dec 2015",
    color: "#005896",
    url: "https://www.farlon.com/",
    tasks: []
  },
  {
    companyName: "Ustwo",
    role: "iOS Developer Intern",
    description:
      "I took part in an intern program with two others, learning how to ... and validate your assumptions, as well as working with Swift to build iOS apps for the intern main project as well as client work.",
    timespan: "",
    color: "#ffbf02",
    url: "https://www.ustwo.com/",
    tasks: []
  },
  {
    companyName: "Business Academy Aarhus",
    role: "Student",
    description: "",
    timespan: "",
    color: "#57B7C9",
    url: "https://www.baaa.dk/",
    tasks: []
  }
];

const Experience = () => {
  const classes = useStyles({});
  return (
    <Container maxWidth="xs">
      <Grid container spacing={2} className={classes.root}>
        {jobs
          .map((job, index) => (
            <Slide
              key={job.companyName}
              in={true}
              direction={index % 2 ? "left" : "right"}
            >
              <Grid xs={12} item>
                <JobCard {...job} />
              </Grid>
            </Slide>
          ))
          .reduce(
            (acc, x) =>
              acc === null ? [x] : ([acc, <ExperienceDivider />, x] as any),
            null
          )}
      </Grid>
    </Container>
  );
};

export default Experience;
