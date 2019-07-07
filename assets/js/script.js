$(function(){

    $('.gatilhoModal').on('click', function(){

        // console.log(this);
        $id = $(this).data('id');
        // $nome = $(this).data('nome');
        
        $('.modal-body form input').attr('value',$id); 
        $('.modal').fadeIn(2000, function(){
            $('.modal-content').fadeIn(100);
        });

    })

    $('button#editar').on('click',function(){
        $textoEditar = document.dadosForm.textId.value;
        $id = document.dadosForm.editarId.value;

        // console.log($textoEditar);
        // console.log($id);
        $id = "#edit-"+$id;
        $($id).text($textoEditar);
        $('.modal').fadeOut(2000, function(){
            $('.modal-content').fadeOut(100);
        });

    })

    $('.modal-footer .close, .modal-header span').on('click',()=>{
        $('.modal').fadeOut(2000, function(){
            $('.modal-content').fadeOut(100);
        });
    });

    

});

function genPDF(){
    html2canvas(document.querySelector(".container"),{
            width: 1100, height: 500
        }).then(function(canvas) {
        // console.log(canvas);debugger;
        document.body.appendChild(canvas);
        var img = canvas.toDataURL("image/png");
        var doc = new jsPDF({
            orientation: 'landscape',
            format: 'b4'
        });

        doc.addImage(img, 'JPEG', 20, 20);

        doc.save('teste.pdf');
    });
}
