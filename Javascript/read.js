var url = "http://jsonplaceholder.typicode.com/users";
function getDataFromAPI() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res);
    });
}
getDataFromAPI();
