import React, { useState } from "react";
import Nav from '../../Components/Shared/nav';
import ThemeModal from '../../Components/Roadmap/index';

function RoadMap() {
    const [hidden, setHidden] = useState(false);

    const handleChange = () => {
        hidden ? setHidden(false) : setHidden(true);
    }

    return (
        <div className="w-screen h-full flex bg-white flex-col">
            <Nav />
            <button className="h-12 w-96 bg-indigo-600 text-white" onClick={handleChange}>Boton provicional</button>
            <ThemeModal handleChange={handleChange} hidden={hidden}/>
        </div>
    )
}

export default RoadMap;