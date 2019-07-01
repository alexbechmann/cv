import React from 'react';
import { Theme, makeStyles, Grid, Container, Slide } from '@material-ui/core';
import JobCard, { JobCardProps } from './JobCard';
import ExperienceDivider from './ExperienceDivider';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const jobs: JobCardProps[] = [
  {
    companyName: 'Danfoss',
    role: 'Web & CMS Consultant',
    description:
      'I work as a DevOps & full-stack developer, across a number of CMS websites. I built the company Intranet from the ground up with a small team, and i am actively involed in automation & cloud infrastructure for www.danfoss.com.',
    timespan: 'Jan 2016 - Present',
    color: '#e2000f',
    url: 'https://www.danfoss.com/',
    tasks: [],
    tags: [
      'React',
      'TypeScript',
      'Azure DevOps',
      'Umbraco',
      'Docker',
      'Azure',
      'Code review',
      'Scrum',
      'Gitflow',
      'MongoDB',
      'NodeJS',
      'GraphQL'
    ]
  },
  {
    companyName: 'Farlon',
    role: '.NET Developer',
    description:
      'My first job after graduating. I was responsible for the development of a web app to import, manipulate & export customer data.',
    timespan: 'Aug 2015 - Dec 2015',
    color: '#005896',
    url: 'https://www.farlon.com/',
    tasks: [],
    tags: ['.NET Framework', 'DevExpress', 'Solo project']
  },
  {
    companyName: 'Ustwo',
    role: 'iOS Developer intern',
    description:
      'I took part in an internship program, learning how to properly plan and validate assumptions before using those skills to build iOS apps for the main internship project and client work.',
    timespan: 'Feb 2015 - Apr 2015',
    color: '#ffbf02',
    url: 'https://www.ustwo.com/',
    tasks: [],
    tags: ['Swift', 'PHP', 'Scrum', 'Git']
  },
  {
    companyName: 'Business Academy Aarhus',
    role: 'Student',
    description:
      'I studied Multimedia Design & Communication for two years, and continued on to complete my Bachelors degree with another year and a half of Web Development at BAA. I also won a graduation award for the highest exam grades!',
    timespan: 'Jan 2012 - June 2015',
    color: '#57B7C9',
    url: 'https://www.baaa.dk/',
    tasks: [],
    tags: ['.NET Framework', 'PHP', 'C#', 'Objective C', 'Photoshop', 'SQL', 'NoSQL', 'HTML', 'CSS', 'JavaScript']
  }
];

const Experience = () => {
  const classes = useStyles({});
  return (
    <Container maxWidth="xs">
      <Grid container spacing={2} className={classes.root}>
        {jobs
          .map((job, index) => (
            <Slide key={job.companyName} in={true} direction={index % 2 ? 'left' : 'right'}>
              <Grid xs={12} item>
                <JobCard {...job} />
              </Grid>
            </Slide>
          ))
          .reduce((acc, x) => (acc === null ? [x] : ([acc, <ExperienceDivider />, x] as any)), null)}
      </Grid>
    </Container>
  );
};

export default Experience;
