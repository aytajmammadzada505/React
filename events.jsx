//task 2
export default function App() {
    const handleNextClick = () => {
        alert("Salam");
        console.log("indeks deyisdi", currentIndex);
    };

    return (
        <div style={{ padding: "20px" }}>
            <button onClick={handleNextClick}>Salamla!</button>
            <button onClick={() => console.log("Düyməyə kliklənildi!")}>
                Konsola yaz
            </button>
        </div>
    )

}
