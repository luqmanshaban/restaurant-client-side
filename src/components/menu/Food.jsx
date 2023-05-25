
import React, { useState } from "react";
import styles from '../../styles/Food.module.scss'
import Data from "../../Data";

const TopPick = () => {
    const [cartItems, setCartItems] = useState(Array(Data.topPick.length).fill(0))

    const {topPick} = Data;

    return (
        <>
        <h1>Top Pick</h1>
        <section className={styles.food}>
        {
            Data.topPick.map((food, index) => (
                <article key={index}>
                    <img src={food.img} alt={food.name} />
                    <h1>{food.name}</h1>
                    <h3>Price: KES{food.price}</h3>
                    <button>Add to cart</button>
                </article>
            ))
        }
        </section>
        </>
    )
}

const Meals = () => {
    const [cartItems, setCartItems] = useState(Array(Data.meals.length).fill(0))

    const {measl} = Data;

    return (
        <>
        <h1>Top Pick</h1>
        <section className={styles.food}>
        {
            Data.meals.map((food, index) => (
                <article key={index}>
                    <img src={food.img} alt={food.name} />
                    <h1>{food.name}</h1>
                    <h3>Price: KES{food.price}</h3>
                    <button>Add to cart</button>
                </article>
            ))
        }
        </section>
        </>
    )
}

const Shawarma = () => {
    const [cartItems, setCartItems] = useState(Array(Data.shawarma.length).fill(0))

    const {shawarma} = Data;

    return (
        <>
        <h1>Top Pick</h1>
        <section className={styles.food}>
        {
            Data.shawarma.map((food, index) => (
                <article key={index}>
                    <img src={food.img} alt={food.name} />
                    <h1>{food.name}</h1>
                    <h3>Price: KES{food.price}</h3>
                    <button>Add to cart</button>
                </article>
            ))
        }
        </section>
        </>
    )
}

const Drinks = () => {
    const [cartItems, setCartItems] = useState(Array(Data.drinks.length).fill(0))

    const {drinks} = Data;

    return (
        <>
        <h1>Top Pick</h1>
        <section className={styles.food}>
        {
            Data.drinks.map((food, index) => (
                <article key={index}>
                    <img src={food.img} alt={food.name} />
                    <h1>{food.name}</h1>
                    <h3>Price: KES{food.price}</h3>
                    <button>Add to cart</button>
                </article>
            ))
        }
        </section>
        </>
    )
}

const Snacks = () => {
    const [cartItems, setCartItems] = useState(Array(Data.snacks.length).fill(0))

    const {snacks} = Data;

    return (
        <>
        <h1>Top Pick</h1>
        <section className={styles.food}>
        {
            Data.snacks.map((food, index) => (
                <article key={index}>
                    <img src={food.img} alt={food.name} />
                    <h1>{food.name}</h1>
                    <h3>Price: KES{food.price}</h3>
                    <button>Add to cart</button>
                </article>
            ))
        }
        </section>
        </>
    )
}

export {TopPick, Meals, Shawarma, Drinks, Snacks}