const dictionary = (city) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0f626657bamsh0ef7c86d9b9fba1p174806jsn4059fc13e714',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        
        const wordHeadingElement = document.getElementById('temp');
        const definitionElement = document.getElementById('humidity');
        const maxtempelement=document.getElementById('maxtemp');
        const mintempelement=document.getElementById('mintemp');
        
        wordHeadingElement.innerHTML ="TEMPERATURE:"+response.temp+"@celcius";
        definitionElement.innerHTML = "HUMIDITY:"+response.humidity+"%";
         maxtempelement.innerHTML="MAX TEMPERATURE:"+response.max_temp+"@celcius";
         mintempelement.innerHTML="MIN TEMPERATURE:"+response.min_temp+"@celcius";
  
      })
      .catch((err) => console.error(err));
  }
  
  const searchinput = document.getElementById('searchinput');
  const searchbtn = document.getElementById('searchbtn');
  
  searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    dictionary(searchinput.value);
  });
 
 