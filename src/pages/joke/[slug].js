import { useRouter } from "next/router";
import "../../app/globals.css";
import Joke from "../../app/components/Joke";
import DogCard from "../../app/components/DogCard";
import DogData from "../../app/components/DogData";
import Header from "../../app/components/Header";


export default function dog() {
    const router = useRouter();
    
    const slug = router.query.slug;
    
    const dogData = DogData.find((val) => val.id === slug);

    if(!dogData) {
        return <div>Dog not found</div>
    };

    return (
        <main>
            <Header/>
            <DogCard
                dogAct={dogData.activity}
                dogAge={dogData.age}
                dogBreed={dogData.breed}
                dogChar={dogData.description}
                dogImg={dogData.image.url}
                dogImgAlt={dogData.image.alt}
                dogName={dogData.name}
            />
            <Joke/>
        </main>
    )
}



