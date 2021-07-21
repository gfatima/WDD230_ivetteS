// set the JSON URL
const requestURL = './json/directory.json';

// use fetch to obtain a promise for
fetch(requestURL)

  .then(function (response) {

    return response.json();

  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    const cards = document.querySelector('.card');

    businesses.forEach(business => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let image = document.createElement('img');
      let a = document.createElement('a');
      let aText = document.createTextNode("Website");

      h2.innerHTML = `${business.business}`;
      p1.innerHTML = `Phone: ${business.phone}`;
      p2.innerHTML = `Address: ${business.address}`;
      a.setAttribute('href', business.website);
      a.appendChild(aText);
      image.setAttribute('src', business.logo);
      image.setAttribute('alt', `${business.business}`);


      card.append(h2, p1, p2, a, image);
      cards.append(card);

    });
  });
