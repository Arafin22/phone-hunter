
// fatch all phone data 
const allPhones =()=>{
    
    document.getElementById("phone-show").innerHTML = "";
    const showOne =document.getElementById("show-one");
    showOne.innerHTML = "";
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
                
                <button onclick="showOne('${phone.slug}')" class="btn btn-success">Details</button>

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

// show one divice function 
const showOne =slug=>{
    //const showOne =document.getElementById("show-one");
    const url =`https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => setDetails(data.data));

}


const setDetails =info=>{
    const showOne =document.getElementById("show-one");
    showOne.innerHTML = "";
    console.log(info);

    //const showdetails =document.getElementById("show-details");
    //showdetails.innerHTML = "";
   

    let sensors = info.mainFeatures.sensors;
    let chipSet = info.mainFeatures.chipSet;
    //let bluet = info.others.Bluetooth;

    console.log(info.releaseDate);
    const error="Not Found";
     //phone?.date === undefined? error:phone.date
    
console.log(chipSet);
  console.log(info);
    //console.log("showOne");
    const div = document.createElement("div");
    div.innerHTML=`
     

    <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6 col-12 text-center">
        <img class="img-fluid p-5" src="${info.image}" alt="">
        <h6>Model No: ${info.name}</h6>

    </div>

    <div class="col-sm-12 col-md-6 col-lg-6 col-12 ">
        <div class="align-items-center">
        <div class="pt-5">
          <h3>Specification</h3>
          <h6>Release Date: ${info?.releaseDate === ""? error:info.releaseDate}</h6>
          <h6>Display: ${info.mainFeatures.displaySize[0]} inches</h6>
          <h6>Memory: ${info.mainFeatures.memory}</h6>
         
          <h6>GPS: ${info?.others.GPS === ""? error:info.others.GPS}</h6>
          <h6>Radio: ${info?.others.Radio === ""? error:info.others.Radio}</h6>
          <h6>USB: ${info?.others.USB === ""? error:info.others.USB}</h6>
          <h6>WLAN: ${info?.others.WLAN === ""? error:info.others.WLAN}</h6>
          
          
          
          <button onclick="showSensor('${
            sensors}')" type="button" class="bg-light text-primary btn  btn-lg mb-2 ">Sensors</button>
          <button onclick="showSensor('${
            chipSet}')" type="button" class="bg-light text-primary btn  btn-lg mb-2">chipSet</button>

            <div id="show-details"></div>

        </div>
        </div>
    </div>
</div>
  

    `;
    showOne.appendChild(div);
   // console.log(div);

}

const showSensor = (chip) =>{

  //const chips = Object.entries(chip);

  console.log(chip);
  //console.log(display);

    const showdetails =document.getElementById("show-details");
  showdetails.innerHTML =
`<table class="table">


<tbody>
 
  <tr>
   
    <td>${chip}</td>
  </tr>
  
</tbody>
</table>`;


 
  
}