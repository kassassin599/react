import React, { useState, createContext, useContext } from 'react';



// Step 1: Create a context for the theme

const ThemeContext = createContext();



function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('light');



  const toggleTheme = () => {

    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  };



  return (

    // Step 2: Provide the theme and toggleTheme function to the component tree

    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      {children}

    </ThemeContext.Provider>

  );

}



function ThemedButton() {

  // Step 3: Consume the theme context using useContext

  const { theme, toggleTheme } = useContext(ThemeContext);



  return (

    <button

      onClick={toggleTheme}

      style={{

        backgroundColor: theme === 'light' ? '#fff' : '#333',

        color: theme === 'light' ? '#000' : '#fff',

        padding: '10px 20px',

        border: 'none',

        borderRadius: '5px',

      }}

    >

      Toggle Theme

    </button>

  );

}



function App() {

  return (

    <ThemeProvider>

      <div>

        <h2>Current Theme</h2>

        <ThemedButton />

      </div>

    </ThemeProvider>

  );

}



export default App;