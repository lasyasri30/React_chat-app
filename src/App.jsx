
import { useState } from 'react'
import Messaging from './components/ChatMessage'
import './App.css'

const users_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [messages, setMessages] = useState([])

  const OnchangeSearchInput = (event) => {
    setSearchInput(event.target.value)
  }

  const sendMessage = () => {
    if (searchInput.trim() === "") {
      return
    }

    const randomUser =
      users_list[Math.floor(Math.random() * users_list.length)]

    const newMessage = {
      id: Date.now(),
      username: randomUser,
      message: searchInput,
      likes: 0
    }

    setMessages([...messages, newMessage])
    setSearchInput("")
  }

  const likeMessage = (id) => {
    setMessages(
      messages.map((item) =>
        item.id === id
          ? { ...item, likes: item.likes + 1 }
          : item
      )
    )
  }

  return (
    <div className="container">

      {/* LEFT SIDEBAR */}

      <aside className="aside-con">

        <div className="user-profile">

          <div className="circle">
            RR
          </div>

          <div className="user-details">
            <h3 className="name">Rolande Raimondi</h3>
            <p className="role">Research Nurse</p>
          </div>

        </div>


        <div className="conversations-con">

          <p className="side-heading">
            Conversations
          </p>

          <p className="plus">
            +
          </p>

        </div>


        <div className="side-container">

          <div className="hash">
            #
          </div>

          <p className="side-para">
            Poland Office
          </p>

        </div>


        <div className="side-container active">

          <div className="hash">
            #
          </div>

          <p className="side-para">
            Introductions
          </p>

        </div>


        <div className="side-container">

          <div className="hash">
            #
          </div>

          <p className="side-para">
            India Office
          </p>

        </div>

      </aside>


      {/* RIGHT SIDE */}

      <main>

        <div className="main-container">


          {/* CHANNEL HEADER */}

          <div className="channel-header">

            <h3>
              Introductions
            </h3>

            <p className="role">
              This Channel Is For Company Wide Chatter
            </p>

          </div>


          <hr />


          {/* MESSAGE AREA */}

          <div className="messages-container">

            {messages.map((item) => (

              <Messaging
                key={item.id}
                username={item.username}
                message={item.message}
                likes={item.likes}
                likeMessage={() => likeMessage(item.id)}
              />

            ))}

          </div>


          {/* MESSAGE INPUT */}

          <div className="input-container">

            <input
              className="msg-input"
              type="text"
              placeholder="Type Message"
              value={searchInput}
              onChange={OnchangeSearchInput}
              onKeyDown={(event) => {

                if (event.key === "Enter") {
                  sendMessage()
                }

              }}
            />

            <button
              className="send-button"
              onClick={sendMessage}
            >
              Send
            </button>

          </div>


        </div>

      </main>

    </div>
  )
}

export default App
