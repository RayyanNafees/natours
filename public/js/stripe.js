/* eslint-disable */
import axios from 'axios'
import {showAlert} from './alerts'
const stripe = Stripe('pk_test_51P0djMSHCmx5B671zIZW31h3EM3NWVkZq6RG8ebRFJ5pa2wnJVoWDHlkM8OtGIyE8S0dQEhOS4voe0rzNXo2tvsZ00ONsOenxn')

export const bookTour = async tourId => {

    try{

        // 1) Get checout session from API 
        const session = await axios(`http://localhost:8000/api/v1/bookings/checkout-session/${tourId}`)
        
    console.log(session)

    // 2) Create checkout form + charge credit card 
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
    })
}
catch(err) {

    console.log(err)
    showAlert('error', err)

}
}