$(document).ready(function(){

    const app = $('#root');
    app.append('<img src="/img/logo.jpeg">')
    
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.append(container);

    $.getJSON('/data', function(d){
        d.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
      
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
      
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;
      
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
          });
    })

});

