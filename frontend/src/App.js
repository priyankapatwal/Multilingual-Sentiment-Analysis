import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        axios
            .get("http://localhost:8000")
            .then((response) => console.log(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return <div className="App"></div>;
}

export default App;
