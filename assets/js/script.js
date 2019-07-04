$(function(){

    $('.gatilhoModal').on('click', function(){

        // console.log(this);
        $id = $(this).data('id');
        $nome = $(this).data('nome');
        
        $('.conteudo').text(`div gatilhoModal tem data-id = ${$id} e data-nome = ${$nome}`);
        
        $('.modal').fadeIn(2000, function(){
            $('.corpo').fadeIn(100);
        });

        // alternativa
        // $('.modal').show();
    })

    $('#fechar').on('click',()=>{
        $('.modal').hide();
    });

});