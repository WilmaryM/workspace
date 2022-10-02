console.log('hello word');

const options = {
     method: 'GET',
     Headers:{
}
};
fetch("https://pokeapi.co/api/v2/", options)
    .then(res=>  res.json())
    .then(res => console.log(res))
// .then(data => console.log(data))
    .catch(error => console.log('Error'))

