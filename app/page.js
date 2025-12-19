import Link from 'next/link';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
        
      </div>
      <div className={classes.hero}>
        <h1>Delicious meals, shared by a food-loving community.</h1>
        <p>
          Discover and share everyday cooking inspiration on NextLevel Food.
          Find recipes, cooks, and how-tos to inspire your next meal.
        </p>
      </div>
      <div className={classes.cta}>
        <Link href="/community">Join the Community</Link>
        <Link href="/meals">Explore Meals</Link>

      </div>
    </header>
    <main></main>
    </>
  );
}
