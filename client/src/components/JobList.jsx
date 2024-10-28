import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid2, CircularProgress, Box } from '@mui/material';
import { WorkOutline } from '@mui/icons-material';

const JobCard = ({job}) => {
    return(
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                // height: '100%',
                boxShadow: '0 4px 8px #1976d2',
                p: 2,
                mt:3
            }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {job.title}
                </Typography>
                <Typography sx={{mb: 1.5}} color='text.secondary'>
                    {job.company_name} - {job.location}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={{
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        '&:hover':{
                            backgroundColor: '#115293'
                        },
                        width: '100%',
                    }}
                    size="small" href={job.share_link} target="_blank" rel="noopener">
                </Button>
            </CardActions>
        </Card>
    );
};

const JobList = ({ jobs, loading }) => {

    if (loading) {
        return (
          <Box display="flex" justifyContent="center" marginTop="20px">
            <CircularProgress />
          </Box>
        );
      }

      if (jobs.length === 0) {
        return (
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop="20px">
            <WorkOutline style={{ fontSize: 60, color: 'gray' }} />
            <Typography variant="h6" color="textSecondary">
              No jobs available
            </Typography>
          </Box>
        );
      }

    return (
        <Grid2 container spacing={2}>
            {jobs.map((job, index) => (
                <Grid2 item xs={12} sm={6} md={4} key={index}>
                    <JobCard job={job} />
                </Grid2>
            ))}
        </Grid2>
    );
};

export default JobList;