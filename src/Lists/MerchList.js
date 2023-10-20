import disposed from '../images/shirt.jpg'
import disposed2 from '../images/shirt.jpg'
import shirt1 from '../images/shirt1.jpg'
import shirt2 from '../images/shirt2.jpg'
import shirt3 from '../images/shirt3.jpg'

import { Link } from 'react-router-dom'




export const MERCH = [
    {
        id: 0,
        name: 'GRAPHIC TEE',
        disc: 'Disposed Kings is a metal band based out of Waynesboro, VA. I made this page to help them engage with their fans and keep fans informed about upcoming shows, new music and merchandise.',
        price: '$15',
        image: shirt1,
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            Visit Website</a>

    },
    {
        id: 1,
        name: 'CREWNECK',
        disc: 'Disposed Kings is a metal band based out of Waynesboro, VA. I made this page to help them engage with their fans and keep fans informed about upcoming shows, new music and merchandise.',
        price: '$25',
        image: shirt2,
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            Visit Website</a>

    },
    {
        id: 2,
        name: 'WHITE FROCKET TEE',
        disc: 'Disposed Kings is a metal band based out of Waynesboro, VA. I made this page to help them engage with their fans and keep fans informed about upcoming shows, new music and merchandise.',
        price: '$10',
        image: shirt3,
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            Visit Website</a>

    }

];