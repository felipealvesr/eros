document.getElementById('tabDefault').click();

function OpenTab(event, idTab){
    var content = document.getElementsByClassName('conteudo-portfolio');

    for (var i = 0; i < content.length; i++){
        content[i].style.display = 'none';
    }

    var tabs = document.getElementsByClassName('button-tab');

    for (var i = 0; i < tabs.length; i++){
        tabs[i].className = tabs[i].className.replace('dots-active', '');
    }

    document.getElementById(idTab).style.display = 'block';
    event.currentTarget.className += ' dots-active';
}


