import { Products } from "./db";

export default function App() {
    let currentIndex = 0;


const handleNext = () => {
    currentIndex++;
    console.log("indeks deyisdi", currentIndex);
}
const handleback = () => {
    currentIndex--;
    console.log("indeks deyisdi", currentIndex);
}

return (
    <div style={{ padding: "20px" }}>
        <h1>{Products[currentIndex].name}</h1>
        <p>{Products[currentIndex].price}</p>
        <button onClick={handleback}>Back</button>
        <button onClick={handleNext}>Next</button>
    </div>
)
}