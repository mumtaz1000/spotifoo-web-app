export function fetchData(query){
    fetch(`http://localhost:8080/music/?page=`+query)
    .then((response) => {
      return response.json();
    })
    return data;
}