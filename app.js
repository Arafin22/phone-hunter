const allPhones =()=>{
   

    let search= document.getElementById("search-box").value;
     const searchvalue = search.toLowerCase();

     const url=`https://openapi.programming-hero.com/api/phones?search=${searchvalue}`;
     fetch(url)
     .then((response) => response.json())
     .then((data) => {console.log(data.data)});
}