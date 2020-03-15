import React, { useRef, useState } from "react";
import { Theme, makeStyles, Grid, Container, Slide } from "@material-ui/core";
import JobCard, { JobCardProps } from "./JobCard";
import ExperienceDivider from "./ExperienceDivider";
import { motion } from "framer-motion";
import { useOnScreen } from "../hooks/use-on-screen";
import { jobs } from "../info/jobs";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Experience = () => {
  const classes = useStyles({});
  return (
    <Container disableGutters maxWidth="md">
      <Grid container className={classes.root}>
        {jobs
          .map((job, index) => {
            const ref = useRef();
            const onScreen = useOnScreen(ref, "00px");
            const [hasMouseOver, setHasMouseOver] = useState(false);
            const scale = hasMouseOver ? 1.05 : onScreen ? 1 : 0.5;

            return (
              <motion.div
                ref={ref}
                animate={{ scale }}
                key={job.companyName}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20
                }}
                onMouseEnter={() => setHasMouseOver(true)}
                onMouseLeave={() => setHasMouseOver(false)}
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
