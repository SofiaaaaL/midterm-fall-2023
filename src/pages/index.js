import "../app/globals.css";
import DogData from "../app/components/DogData";
import DogCard from '../app/components/DogCard';
import Header from "../app/components/Header";

const jokeApi = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single`;

export async function getStaticProps() {
  const responseJoke = await fetch(jokeApi);
  const jokeData = await responseJoke.json(); 
  return {
    props: {
      jokeData,
    },
  };
}

export default function Home({jokeData}) {
  return (
    <main>
        <Header/>

        {DogData.map((dogs) => (
          <DogCard 
            dogAct={dogs.activity}
            dogAge={dogs.age}
            dogBreed={dogs.breed}
            dogChar={dogs.description}
            dogGender={dogs.gender}
            key={dogs.id}
            dogImg={dogs.image.url}
            dogImgAlt={dogs.image.alt}
            dogName={dogs.name}
          />
        ))}  
    </main>
  )
}