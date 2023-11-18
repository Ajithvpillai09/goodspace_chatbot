window.onload = function() {
    const list = document.querySelector(".list");

    const historyEndpoint = '/api/history';
    fetch(historyEndpoint)
      .then((response) => {
        if (!response.status === 200) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        
        console.log('All sessions:', data.data);
       const history = data.data.map((el) => {
        const box = document.createElement("div");
        box.classList.add("container");
        box.innerHTML = `
          <div class="content">
            <div class="messageValue">
              ${el.sessionReq}
            </div>
            <div>
              ${el.createdAt}
            </div>
          </div>
        `;
        list.appendChild(box); // Append each box to the list
      });
        console.log(history);
       
    // list.appendChild(history);
      })
      .catch((error) => {
        console.error('Error fetching all sessions:', error.message);
      });
  };

