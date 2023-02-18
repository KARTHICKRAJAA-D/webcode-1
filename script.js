

async function api(searchvalue){
    url=`https://api.nationalize.io/?name=${searchvalue}`
     a = fetch(url);
     out = await a;
    prom = out.json();
     res =await prom;
   console.log(res)
   
    try{
      var body = document.querySelector('body')

      var container = document.createElement('div')
      //Name
      var Name = document.createElement('p')
      Name.innerText = `Name:${res.name}`
      Name.style.backgroundColor='white'
      container.append(Name)
      body.append(container)
      console.log(res.name)

      //Countries:
       var Nationality = document.createElement('p')
       Nationality.innerText = `Country:${res.country[0].country_id}`
       container.append(Nationality)
       body.append(container)
       console.log(res.country[0].country_id) 
      //probability value1
      var probability = document.createElement('p')
      probability.innerText = `probability value:${res.country[0].probability}`
      container.append(probability)
      body.append(container)
      console.log(res.country[0].probability)

      //Countries:
       var Nationality2 = document.createElement('p')
       Nationality2.innerText =`Country:${res.country[1].country_id}`
       container.append(Nationality2)
       body.append(container)
       console.log(res.country[1].country_id) 

//probability value2
    var probability2 = document.createElement('p')
    probability2.innerText = `probability value:${res.country[1].probability}`
    container.append(probability2)
    body.append(container)
    console.log(res.country[0].probability2)
    }catch{
       'error'
    }
  
}

var searchvalue;

var form = document.querySelector('.search')
form.addEventListener('submit',(e)=>{
           e.preventDefault()
           var search = document.querySelector('[ placeholder="Enter Name"]')
           searchvalue = search.value
           search.value=''
           api(searchvalue)    
})
