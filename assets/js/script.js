$(function(){

    $('.gatilhoModal').on('click', function(){

        $id = $(this).data('id');
        
        $('.modal-body form input').attr('value',$id); 
        $('.modal').fadeIn(2000, function(){
            $('.modal-content').fadeIn(100);
        });

    })

    $('button#editar').on('click',function(){
        $textoEditar = document.dadosForm.textId.value;
        $id = document.dadosForm.editarId.value;

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

    // Projeto Darag_Drop
    $('.draggable').draggable({

       snap: ".ui-widget-header",
       zIndex: 100,
       connectToSortable: '.sortable',
       revert: "invalid", // when not dropped, the item will revert back to its initial position
        helper: "clone",
        cursor: "move"
    });

    $( "#droppable" ).droppable({
        hoverClass: "dotted",
    });

    // Let the #droppable be droppable as well, accepting items from the trash
    $('#droppable').droppable({
        classes: {
            "ui-droppable-active": "ui-state-highlight"
        },
        drop: function( event, ui ) {
          deleteImage( ui.draggable );
        }
    });

    // Let the .drag-container be droppable as well, accepting items from the trash
    $('.drag-container').droppable({

        drop: function( event, ui ) {
            recycleImage( ui.draggable )
        }
    });

    // Let the .sortable be droppable as well, accepting items from the trash
    // $('.sortable').droppable({

    //     drop: function( event, ui ) {
    //         recycleImage( ui.draggable )
    //     }
    // });

    // Let the #lixeira be droppable as well, accepting items
    $('#lixeira').droppable({
        
        hoverClass: "dotted",
        classes: {
            "ui-droppable-active": "ui-state-green"
        },
        drop: function( event, ui ) {
            ui.draggable.remove();
        }
    });



    function deleteImage( $item ) {
        $item.fadeOut(function() {
            $item.find( ".drag" ).remove();
            $item.appendTo("#droppable").fadeIn(function() {
            $item
                .animate({ width: "70px" })
                .find( ".drag" )
                .animate({ height: "70px" });
            });
        });
    }

    // Image recycle function
    function recycleImage( $item ) {
        $item.fadeOut(function() {
            $item
                .find( ".drag" )
                .remove()
                .end()
                $item.appendTo(".drag-container").fadeIn(function() {
                    $item
                        .animate({ width: "80px" })
                        .find( ".drag" )
                        .animate({ height: "80px" });
                });
        });
    }
    // Soltar e reordenar
    $('.sortable').sortable({
        placeholder: 'placeholder',
        cancel: ".ui-state-disabled",
        connectWith: ".droppable",
        cursor: "move",
        revert: true,
        stop: function(event, ui){

            if((ui.item[0].parentNode.childElementCount > 4) && (ui.item[0].parentNode.children.length > 4)){
                $(ui.item[0].parentNode.children[1]).remove();
            }

        }

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


