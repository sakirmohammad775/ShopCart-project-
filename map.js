fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    displayData(data);
  })
  .catch((err)=>{
    console.log(err)
  })

const displayData = (userData) => {
  const container = document.getElementById("userData-Container");
  userData.forEach((user) => {
    const div=document.createElement('div')
    div.innerHTML=`
    <h4>title</h4>
    <p>description</p>
    <button>Details</button>
    `
    container.appendChild(div)
  });
};
