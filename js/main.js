$(document).ready(function(){

    // Slider

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true,
        pager: true
      });

      // Posts
      var posts = [
          {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },   
        {
            title: 'Prueba de titulo 6',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ];

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
        </article>   
        `;
        $("#posts").append(post);
    });

    // Selector de tema
    var theme = $("#theme");
    // Localstorage
    if(localStorage.getItem('tema') == null || localStorage.getItem('tema') == 'css/green.css'){
        localStorage.getItem('tema', 'css/green.css');
        theme.attr("href", "css/green.css");
    }
    else if(localStorage.getItem('tema') == 'css/red.css'){
        localStorage.getItem('tema', 'css/red.css');
        theme.attr("href", "css/red.css");
    }
    else if(localStorage.getItem('tema') == 'css/blue.css'){
        localStorage.getItem('tema', 'css/blue.css');
        theme.attr("href", "css/blue.css");
    }

    $("#to-green").click(function(){        
        theme.attr("href", "css/green.css");
        localStorage.setItem('tema', 'css/green.css');
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
        localStorage.setItem('tema', 'css/red.css');        
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
        localStorage.setItem('tema', 'css/blue.css');        
    });

});