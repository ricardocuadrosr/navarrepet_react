import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../state/Cart/Action'

const Cart = () => {

    const navigate = useNavigate()
    const {cart} = useSelector(store => store)
    const dispatch = useDispatch()
    const handleCheckout = () => {
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
        dispatch(getCart())
    }, [cart.updateCartItem, cart.deleteCartItem])

  return (
    <div className='p-10'>

        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
            {cart.cart?.cartItems.map((item) =><CartItem key={item.id} item={item}/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border p-2'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Detalles del precio</p>
                    <hr />
                    <div className='space-y-3 font-semibold mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Precio</span>
                            <span>S/{cart.cart?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Descuento</span>
                            <span className='text-green-600'>S/{cart.cart?.discounte}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Gastos de envío</span>
                            <span className='text-green-600'>Gratuito</span>
                        </div>
                        <hr />
                        <div className='flex justify-between pt-3 font-bold'>
                            <span>Monto Total</span>
                            <span className='text-green-600'>S/{cart.cart?.totalDiscountedPrice}</span>
                        </div>
                    </div>
                    <Button onClick={handleCheckout} color='info' className='w-full mt-5' variant="contained" sx={{px:"2.5rem", py:".7rem"}}>
                        Verificar
                    </Button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cart