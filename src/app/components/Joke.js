import { useState, useEffect, useCallback} from 'react'
import styles from "./dogCard.module.css";

const Joke = ({ jokeData }) => {
    const [randomJoke, setRandomJoke] = useState();

    const getNewJoke = useCallback(async () => {
        try {
            const jokeResponse = await fetch(
                'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single'
            );
            if (jokeResponse.ok) {
                const newJokeData = await jokeResponse.json();
                setRandomJoke(newJokeData.joke);
            } else {
                console.error('Failed to fetch a new joke.');
            }
        } catch (error) {
            console.error('Error fetching a new joke:', error);
        }
    }, []);

    useEffect(() => {
        setRandomJoke(jokeData);
    }, [jokeData])

    return(
        <div className={styles.Joke}>
            <h2>Let me tell you a joke:</h2>
            <p>{randomJoke}</p>
            <button onClick={() => getNewJoke()}>Not Funny! Gimme Another Joke</button>
        </div>
    )
}

export default Joke;