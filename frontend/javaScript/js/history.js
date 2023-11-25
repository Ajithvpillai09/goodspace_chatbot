const chatWindow = document.querySelector(".ChatWindow");

window.onload = function() {
    const list = document.querySelector(".list");

    list.addEventListener('click', function(event) {
      const contentDiv = event.target.closest('.content');
      
      if (contentDiv) {
          const id = contentDiv.getAttribute('data-id');
          if (id) {
              singleSesssion(id);
          }
      }
  });
    const historyEndpoint = '/api/history';
    fetch(historyEndpoint)
      .then((response) => {
        if (!response.status === 200) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
       data.data.map((el) => {
        const box = document.createElement("div");
        box.classList.add("container");
        box.innerHTML = `
          <div class="content" data-id="${el._id}"">
            <div class="messageValue">
              ${el.sessionReq}
            </div>
          </div>
        `;
        list.appendChild(box); 
      });
        
      })
      .catch((error) => {
        console.error('Error fetching all sessions:', error.message);
      });
  };


  async function singleSesssion(id){
    try {
      const singleEndPoint = `/api/session/${id}`;
  
      const res = await fetch(singleEndPoint)
      const data = await res.json()
      chatWindow.innerHTML = ""
      data.session.map((el)=>{
        const req = document.createElement("div");
        const res = document.createElement("div");
        req.classList.add("ChatItem", "ChatItem--req")
        res.classList.add("ChatItem", "ChatItem--res")
        req.innerHTML = `
          <div class="ChatItem-chatContent">
            <div class="ChatItem-chatText">${el.req}</div>
          </div>
        `;
        res.innerHTML = `
          <div class="ChatItem-chatContent">
            <div class="ChatItem-chatText">${el.res}</div>
          </div>
        `;
        chatWindow.appendChild(req)
        chatWindow.appendChild(res)
      })

      chatWindow.scrollTo({
        top: chatWindow.scrollHeight,
        behavior: 'smooth'
    });

    } catch (error) {
      console.log(error);
    }
  }


  