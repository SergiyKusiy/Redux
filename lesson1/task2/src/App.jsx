import React from "react";
import { UserContext } from "./user-context";
import Header from './Header';

class App extends React.Component {
   state = {
      userData: {
         name: 'Nikola Tesla',
         avatar_url: 'https://avatars3.githubusercontent.com/u10001',
      },
   };

   render() {
      return (
         <UserContext.Provider value={this.state.userData}>
            <div class="page">
            <Header />
         </div>
         </UserContext.Provider> 
      )
   }
}

export default App;