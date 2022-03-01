
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
        
        const parent =document.getElementById("phone-show");
        const div = document.createElement("div");
        div.className="col-sm-12 col-md-4 col-lg-4 col-12";
         div.innerHTML =`
       
         <div class="card text-center shadow-lg p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <p></p>
                    <img src="${phone.image}" alt="">
                    <h5>Brand: ${phone.brand}</h5>
                    <h4>Model: ${phone.phone_name}</h4>
                
                <button class="btn btn-success">Details</button>

            </div>
          </div>
    
         `
    
   
         parent.appendChild(div);
       }
       document.getElementById("search-box").value="";
      toggleSpinner('none');
      
    }else{
        document.getElementById("search-box").value="";
        toggleSpinner('none');
        
    }
}