import React, { useState, useEffect } from "react";
import SplashPage from "./component/splashpage";
import Navbar from "./component/navbar";
import AzanSection from "./component/azanSection";
import Aktivitaten from "./component/Aktivitäten";
import Veranstaltungen from "./component/Veranstaltungen";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <SplashPage />
            ) : (
              <>
              <div className="root_element">
              <Navbar/>
              <Aktivitaten/>
              <Veranstaltungen/>
              </div>
             

              </>
            )}
        </>
    );
}

export default App;