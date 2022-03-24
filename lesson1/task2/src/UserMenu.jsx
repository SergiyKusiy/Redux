import React from "react";
import { UserContext } from './user-context';


class UserMenu extends React.Component {
   render() {
      const { name, avatar_url } = this.context;
      return (
         <div class="menu">
            <span class="menu__greeting">{`Hello, ${name}`}</span>
            <img
               alt="User Avatar"
               src={avatar_url}
               class="menu__avatar"
            />
         </div>
      );
   }
}
  


UserMenu.contextType = UserContext;

export default UserMenu;