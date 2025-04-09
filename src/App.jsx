import React, { useState, useEffect } from "react";
import SplashPage from "./component/splashpage.jsx";
import Navbar from "./component/navbar.jsx";
import Aktivitaten from "./component/Aktivitäten.jsx";
import Veranstaltungen from "./component/Veranstaltungen.jsx";
import AzanSection from "./component/azanSection.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    // Only show SplashPage initially, and delay rendering of the entire app
    if (isLoading) {
        return <SplashPage />;
    }

    return (
        <div className="root_element">
            <Navbar />
            <AzanSection />
            <Aktivitaten />
            <Veranstaltungen />
        </div>
    );
}

export default App;
