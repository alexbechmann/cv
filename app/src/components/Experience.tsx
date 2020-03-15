import React, { useRef } from "react";
import { Theme, makeStyles, Grid, Container, Slide } from "@material-ui/core";
import JobCard, { JobCardProps } from "./JobCard";
import ExperienceDivider from "./ExperienceDivider";
import { motion } from "framer-motion";
import { useOnScreen } from "../hooks/use-on-screen";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const jobs: JobCardProps[] = [
  {
    companyName: "Danfoss",
    role: "Web & CMS Consultant",
    description:
      "My current role is a full-stack DevOps developer, working on a number internal content management websites. With in a small team, we have built the company intranet site from the ground up, and i am actively involed in automation & cloud infrastructure for www.danfoss.com.",
    timespan: "Jan 2016 - Present",
    color: "#e2000f",
    url: "https://www.danfoss.com/",
    tasks: [],
    tags: [
      "React",
      "TypeScript",
      "Azure DevOps",
      "Umbraco",
      "Docker",
      "Azure",
      "Code review",
      "Scrum",
      "Gitflow",
      "MongoDB",
      "NodeJS",
      "GraphQL"
    ],
    location: "Nordborg, Denmark"
  },
  {
    companyName: "Farlon",
    role: ".NET Developer",
    description:
      "My first job after graduating. I developed a web-app to facilitate importing, manipulation & exporting of customer data for their suite of Active Directory based call center solutions.",
    timespan: "Aug 2015 - Dec 2015",
    color: "#005896",
    url: "https://www.farlon.com/",
    tasks: [],
    tags: [".NET Framework", "DevExpress", "Solo project"],
    location: "Copenhagen, Denmark"
  },
  {
    companyName: "Ustwo",
    role: "iOS Developer intern",
    description:
      "I took part in an internship program with ustwo, a design & development agency in London. We learned how to thoroughly plan and validate project assumptions prior to using those skills to build native iOS apps for the main internship project and client work.",
    timespan: "Feb 2015 - Apr 2015",
    color: "#ffbf02",
    url: "https://www.ustwo.com/",
    tasks: [],
    tags: ["Swift", "PHP", "Scrum", "Git"],
    location: "London, United Kingdom"
  },
  {
    companyName: "Business Academy Aarhus",
    role: "Student",
    description:
      "I studied first Multimedia Design & Communication, before completing my Bachelors degree in Web Development at BAA. I also won a graduation award for the highest exam grades!",
    timespan: "Jan 2012 - June 2015",
    color: "#57B7C9",
    url: "https://www.baaa.dk/",
    tasks: [],
    tags: [
      ".NET Framework",
      "PHP",
      "C#",
      "Objective C",
      "Photoshop",
      "SQL",
      "NoSQL",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    location: "Aarhus, Denmark"
  }
];

const Experience = () => {
  const classes = useStyles({});
  return (
    <Container maxWidth="sm">
      <Grid container className={classes.root}>
        {jobs
          .map((job, index) => {
            const ref = useRef();
            const onScreen = useOnScreen(ref, "-100px");
            return (
              <motion.div
                ref={ref}
                animate={{ scale: onScreen ? 1 : 0.5 }}
                key={job.companyName}
              >
                <Grid xs={12} item>
                  <JobCard {...job} />
                </Grid>
              </motion.div>
            );
          })
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
