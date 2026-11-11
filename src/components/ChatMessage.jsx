
function Messaging(props) {

  return (

    <div className="message-row">


      {/* USER AVATAR */}

      <div className="message-avatar">

        {props.username[0]}

      </div>


      {/* MESSAGE */}

      <div className="message-details">


        {/* USERNAME + TIME */}

        <div className="message-top">

          <h4>
            {props.username}
          </h4>

          <span>
            12:16
          </span>

        </div>


        {/* MESSAGE BUBBLE */}

        <div className="message-bubble">

          <p>
            {props.message}
          </p>


          {/* LIKE BUTTON */}

          <button
            className="like-button"
            onClick={props.likeMessage}
          >
            👍 {props.likes}
          </button>

        </div>


      </div>

    </div>

  )
}

export default Messaging
