import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'


const TrignleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute"
})

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: "absolute"
})

const Archivement = () => {
  return (
    <div>
      <Card sx={{position:"relative", bgcolor:"#e7e7e7", color:"black"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                Shop with zosh
            </Typography>
            <Typography variant='body2'>
                Congratulations
            </Typography>
            <Typography variant='h5' sx={{my: 3.1}}>
                420.8k
            </Typography>
            <Button size='small' variant='contained'>
                View Sales
            </Button>
            <TrignleImg src=''></TrignleImg>
            <TrophyImg src='https://cdn-icons-png.flaticon.com/512/116/116356.png'/>
        </CardContent>
      </Card>
    </div>
  )
}

export default Archivement
