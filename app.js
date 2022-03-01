
// fatch all phone data 
const allPhones =()=>{
    
    document.getElementById("phone-show").innerHTML = "";
    let search= document.getElementById("search-box").value;
     const searchvalue = search.toLowerCase();

     const url=`https://openapi.programming-hero.com/api/phones?search=${searchvalue}`;
     fetch(url)
     .then((response) => response.json())
     .then((data) => {showAllPhone(data.data)});
}

// spinner function 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

// show all products 
const showAllPhone =(phones)=>{
   toggleSpinner('block');

    const parent =document.getElementById("phone-show");

    var size = Object.keys(phones).length;
    if(size >=20 || size >0){
       
        const items = phones.slice(0, 20);
        
      for(const phone of items){
        
       const div = document.createElement("div");
       div.className="col-sm-12 col-md-4";
         div.innerHTML =`
       
    <div>
         <div class="card" style="width: 18rem;">
             <img src="${phone.image}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${phone.brand}</h5>
               <p class="card-text"></p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
               <button onclick="showOne('${phone.slug}')" class="btn btn-success">Details</button>
               
             </div>
           </div>
        </div>
         `
    
   
         parent.appendChild(div);
       }
       document.getElementById("search-box").value="";
      toggleSpinner('none');
      const showOne =document.getElementById("show-one");
      showOne.innerHTML = "";
    }else{
        document.getElementById("search-box").value="";
        toggleSpinner('none');
        const showOne =document.getElementById("show-one");
        showOne.innerHTML = "";
    }
}