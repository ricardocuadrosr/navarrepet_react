import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
  "Realizado",
  "Pedido Confirmado",
  "Enviado",
  "En Camino",
  "Entregado"
]

const OrderTraker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => <Step>
                <StepLabel sx={{color:"green", fontSize:"33px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTraker