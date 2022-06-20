const PersonObj = {
    name: 'Victor',
    height: '5 ft 5.3',
    country: 'Nigeria'
}


let data  = ` <div class="container">
                          <li class="name">Name: ${PersonObj.name}</>
                          <li class="name">Height: ${PersonObj.height}</>
                          <li class="name">Country ${PersonObj.country}</>

</div>`;

document.getElementById('result').innerHTML = data