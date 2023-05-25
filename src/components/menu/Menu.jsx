import React from 'react'
import { Meals, TopPick } from './Food'


const Menu = () => {
  return (
    <div>
        <section>
            <TopPick />
        </section>
        <section>
            <Meals />
        </section>
    </div>
  )
}

export default Menu