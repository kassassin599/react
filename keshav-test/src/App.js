import React, { useState} from 'react';



// Step 1: Create a context for the theme




function App() {

  const [likes, setLikes] = useState(0); // Like count ko track karne ke liye state
   
   
   
     return (
   
       <div>
   
         <button onClick={() => setLikes(likes + 1)}>
   
           Like {likes} {/* Like count ko dikhata hai */}
   
         </button>
   
       </div>
   
     );
}



export default App;