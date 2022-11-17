import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput]= useState('');
  const [message, setMessages] = useState([
    {
      name: "Sankar",
      image:
        "https://lh3.googleusercontent.com/cA_mBhQDge3_JGPvJ5veoA3c5UIKTvYDnKmAu7EGzI1iN3v4DeAHm8g-iATA67j9k4DaGt2iAzqIx5gCTt63c3RSc7ZaE0_XFDyFO8L0EN3DnbRibHlvJRrQF0uP9HkeoHlDb6SAeZlXXZOIa9WHPIc2tBiFwHkwpoCzVEletSssodRWGr9MANqkuOV2ebrgpjljaCdCkGCa14MmDF1XJajZ8D3d2yabz11Bj4G97OxCV5MbJMXtzJExGw3xzrrpq9ABOVCLOKrNt1blaFE9I2s5GyqGi-a-9n7yaKUFL0llY7oaI29UycahVj2Qfh-5XGPZF5cmH6Yfg7bxGEwDNeG4_LYBqo_nC1UzYoTG2GTej6TE20X06r5dCdv2XZKoPtHjf-xkaKYtMBuyNJyi6-RRjo9T84a2Res4_DNQlC1_hIyjQSmmd38eAwJmzNG9k6q2sfC57fJwvMzq4Rl32WYiEpvKEVYGBhPKHsLe_dEneN3KjOjdVC5U3phnfW5zjYazS-Ggz6023OTXTwqAyGJSVPVXwimirXX_9NQEdEQSJ9tTDFu7PzjNreoDEImxu97r2yRZAzCds_Ypx8EBnThUBsNXyRoe9IWDkT9xg_v4tKs81MI-AXm7p6ipl7gf0qx0och5OcT5ils57WfusOWPpAEIvcXE0yF9N4mhsBZIzsntFDykRzBHgnjcI67nXZ3OX1C_LXDvD7FBYZcsdILV=s936-no?authuser=0",
      message: "How you doing",
    },
    {
      name: "sankar",
      image:
        "https://lh3.googleusercontent.com/cA_mBhQDge3_JGPvJ5veoA3c5UIKTvYDnKmAu7EGzI1iN3v4DeAHm8g-iATA67j9k4DaGt2iAzqIx5gCTt63c3RSc7ZaE0_XFDyFO8L0EN3DnbRibHlvJRrQF0uP9HkeoHlDb6SAeZlXXZOIa9WHPIc2tBiFwHkwpoCzVEletSssodRWGr9MANqkuOV2ebrgpjljaCdCkGCa14MmDF1XJajZ8D3d2yabz11Bj4G97OxCV5MbJMXtzJExGw3xzrrpq9ABOVCLOKrNt1blaFE9I2s5GyqGi-a-9n7yaKUFL0llY7oaI29UycahVj2Qfh-5XGPZF5cmH6Yfg7bxGEwDNeG4_LYBqo_nC1UzYoTG2GTej6TE20X06r5dCdv2XZKoPtHjf-xkaKYtMBuyNJyi6-RRjo9T84a2Res4_DNQlC1_hIyjQSmmd38eAwJmzNG9k6q2sfC57fJwvMzq4Rl32WYiEpvKEVYGBhPKHsLe_dEneN3KjOjdVC5U3phnfW5zjYazS-Ggz6023OTXTwqAyGJSVPVXwimirXX_9NQEdEQSJ9tTDFu7PzjNreoDEImxu97r2yRZAzCds_Ypx8EBnThUBsNXyRoe9IWDkT9xg_v4tKs81MI-AXm7p6ipl7gf0qx0och5OcT5ils57WfusOWPpAEIvcXE0yF9N4mhsBZIzsntFDykRzBHgnjcI67nXZ3OX1C_LXDvD7FBYZcsdILV=s936-no?authuser=0",
      message: "How you doing",
    },
    {
      message: "good good",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();
      setMessages([...message, { message: input}]);
      setInput("");
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH SANKAR ON 10/06/2021
      </p>
      {message.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__name"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
        <form className="chatScreen__input">
          <input 
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chatScreen__inputField" type="text" placeholder="Type your message.."/>
          <button onClick={handleSend} type="submit" className="chatScreen__inputButton">send</button>
        </form>
      </div>
  );
}

export default ChatScreen;
