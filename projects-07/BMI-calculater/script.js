const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value); // Use parseInt to parse the weight input value
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  else{
    const BmI=(weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${BmI}</span>
    <br></br>`;
    if(BmI<18.6){
      results.innerHTML=`<span>under weight ${BmI}</span>`
    }
    else if(BmI>18.6 || BmI<24.9){
      results.innerHTML=`<span>normal range ${BmI}</span>`
    }
    else if(BmI>24.9){
      results.innerHTML=`<span>over weight  ${BmI}</span>`
    }
  }
});
