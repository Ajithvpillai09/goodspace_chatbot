const ChatSection = ()=>{
    return (
        <section className="main">
        <h1>Welcome to OpenAi ChatBot</h1>
          <div className="ChatWindow">
           
           
          </div>
          <div className="bottom-section">
            <div className="input-container">
                <input id="message" type="text" name="chat" placeholder="message me.."/>
                <div id="submit"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="w-6 h-6">
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>        
                  </div>
            </div>
        </div>
          <p>Open AI ChatBot</p>
      </section>
    )
}

export default ChatSection