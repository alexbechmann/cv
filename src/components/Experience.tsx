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
      'I work as a DevOps & full-stack developer, accross a suite of CMS websites. I built the company Intranet from the ground up with a small team, and i am actively involed in automation & cloud infrastructure for www.danfoss.com.',
    timespan: 'Jan 2016 - Present',
    color: '#e2000f',
    url: 'https://www.danfoss.com/',
    tasks: [],
    tags: [
      'React',
      'TypeScript',
      'Azure DevOps',
      'Umbraco',
      '.NET Framework',
      '.NET Core',
      'Docker',
      'Azure',
      'Code review',
      'Scrum',
      'MongoDB',
      'Gitflow',
      'NodeJS',
      'GraphQL'
    ]
  },
  {
    companyName: 'Farlon',
    role: '.NET Developer',
    description: 'I was responsible for the development of a web app to import, manipulate & export customer data.',
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
      'I took part in an internship program, learning how to properly plan and validate assumptions before building iOS apps for the main internship project and for client work.',
    timespan: 'Feb 2015 - Apr 2015',
    color: '#ffbf02',
    url: 'https://www.ustwo.com/',
    tasks: [],
    tags: ['Swift', 'PHP', 'Scrum', 'Git']
  },
  {
    companyName: 'Business Academy Aarhus',
    role: 'Student',
    description: '',
    timespan: 'Jan 2012 - June 2015',
    color: '#57B7C9',
    url: 'https://www.baaa.dk/',
    tasks: [],
    tags: ['.NET Framework', 'Photoshop', 'Flash', 'C#', 'Objective C', 'SQL', 'NoSQL']
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
