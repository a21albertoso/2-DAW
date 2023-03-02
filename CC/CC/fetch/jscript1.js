       
       let h1=document.createElement("h1");
       let head = document.querySelector("head");
       fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
       .then((response) => {
       if (response.ok) return response.json();
       return Promise.reject(response);
       })
       .then(function(data) {
        h1.textContent=data.squadName;
        
        return console.log(data);
        
       })
       .catch(function (error) {
       console.warn("Something went wrong.", error.message);
       });
       head.after(h1)