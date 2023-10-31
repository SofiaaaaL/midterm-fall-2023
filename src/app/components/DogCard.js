import styles from "./dogCard.module.css";

const DogCard = ({
    dogAct,
    dogAge,
    dogBreed,
    dogChar,
    dogImg,
    dogImgAlt,
    dogName,
    Joke
}) => (
    <div className={styles.DogCardWarpper}>
        <div className={styles.DogCard} style={{ backgroundColor: `rgba(0,0,0,0.${dogAge})` }}>
            <div className={styles.DogImg}>
                <img src={dogImg} alt={dogImgAlt} />
            </div>
            <div className={styles.DogInfo}>
                <h1>{dogName}</h1>
                <h3>"{dogChar}"</h3>
                <div>
                    <p>Age: {dogAge}</p>
                    <p>Breed: {dogBreed}</p>
                    <p>Favorite Activity: {dogAct}</p>
                </div>
            </div>
            <p>{Joke}</p>
        </div>
    </div>
)

export default DogCard;