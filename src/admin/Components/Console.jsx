import { Grid } from '@mui/material'
import React from 'react'
import Archivement from './Archivement'
import MonthlyOverview from './MonthlyOverview'

const Console = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <Archivement />
        </Grid>
        <Grid item xs={12} md={8}>
            <MonthlyOverview />
        </Grid>
      </Grid>
    </div>
  )
}

export default Console
