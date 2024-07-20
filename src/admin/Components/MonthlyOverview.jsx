import { AccountCircle } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        stats: '12.5k',
        tittle: 'Customers',
        color: 'rebeccapurple',
        icon: <AccountCircle sx={{fontSize:"1.75rem"}}/>
    }
]

const renderStats = ()=>{
    return salesData.map((item, index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{display:"flex", alignItems: "center"}}>
                <Avatar variant='rounded' sx={{mr:3, width: 44, height: 44, boxShadow: 3, color: "white", backgroundColor: `${item.color}`}}>
                    {item.icon}
                </Avatar>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='caption'>{item.tittle}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>    
        </Grid>
    )
)
}

const MonthlyOverview = () => {
  return (
    <div>
      <Card sx={{bgcolor:"#3fc6d1", color:"white"}}>
        <CardHeader title="Montlu Overview"
        action={
            <IconButton size='small'>
               <MoreVertIcon />     
            </IconButton>  
        }
        subheader={
            <Typography variant='body2'>
                <Box component="span" sx={{fontWeight:600}}>
                    Total 48.5
                </Box>
                this month
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight: "2rem !important",
                letterSpacing:".15px !important"
            }
        }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5, 0]}>
                {renderStats()}
            </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default MonthlyOverview
