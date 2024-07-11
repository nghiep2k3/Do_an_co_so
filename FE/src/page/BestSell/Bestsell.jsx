import React, { useEffect } from 'react'
import Cart from '../../components/Cart/Cart'
export default function Bestsell() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            Bestsell
            <Cart></Cart>
        </div>

    )
}
