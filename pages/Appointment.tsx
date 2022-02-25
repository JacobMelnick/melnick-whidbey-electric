import react from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Layout from "../Components/Layout/Layout";

type ScheduleProps = {};

const Schedule = ({}: ScheduleProps): JSX.Element => {
  return (
    <Layout>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} md={9} lg={4}>
          <Typography variant="h1">
            <div>Schedule</div>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Schedule;
