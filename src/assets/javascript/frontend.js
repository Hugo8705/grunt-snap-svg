$( document ).ready(function() {
    
	/* RENARD */

	var renard = Snap('#renard');
	//var zone = renard.rect(220, 50, 320, 500);
	//zone.attr({class: 'zone-sensible'});

	var tete = Snap.select("#tete");
	var queue = Snap.select("#queue");
	var bras_droit = Snap.select("#bras_droit");
	var bras_gauche = Snap.select("#bras_gauche");

	var hoverIn = function renardHover() {
		bras_droit.animate({transform: 'r12,0,0'}, 500, mina.easein);
		bras_gauche.animate({transform: 'r-12,20,-20'}, 500, mina.easein);
		tete.animate({transform: 'r-3,440,350'}, 500, mina.easein);
		queue.animate({transform: 'r3,440,350'}, 500, mina.easein);
	};

	var hoverOut = function renardOut() {
		bras_droit.animate({transform: 'r-12,0,0'}, 500, mina.easein);
		bras_gauche.animate({transform: 'r12,20,-20'}, 500, mina.easein);
		tete.animate({transform: 'r0,440,350'}, 500, mina.easein);
		queue.animate({transform: 'r0,440,350'}, 500, mina.easein);
	};

	var saut = function renardSaute() {
		renard.animate({transform: 't0 -20'}, 200, mina.easeinout, function (){
		  // This animation triggers once the other has finished
		  renard.animate({transform: 'r0 t0 0'}, 600, mina.elastic);
		});
	};

	renard.hover( hoverIn, hoverOut );
	renard.click(saut); 

	/* Animate eyes */	
	var oeil_gauche = Snap.select("#oeil_gauche");
	var oeil_droit = Snap.select("#oeil_droit");
	var mask_oeil_gauche = renard.rect(315,290, 40,40).attr({fill: '#ffffff', id: 'mask_oeil_gauche'});	
	var mask_oeil_droit = renard.rect(465,290, 40,40).attr({fill: '#ffffff', id: 'mask_oeil_droit'});

	oeil_gauche.attr({
	  mask: mask_oeil_gauche
	});
	oeil_droit.attr({
	  mask: mask_oeil_droit
	});

	function OuvreOeil(){
	  mask_oeil_gauche.stop().animate({transform: 't0 -40'}, 400, mina.easeout, FermeOeil);
	  mask_oeil_droit.stop().animate({transform: 't0 -40'}, 400, mina.easeout);
	}
	function FermeOeil(){
	  mask_oeil_droit.stop().animate({transform: 'r0t0 0'}, 400, mina.easeout);
	  mask_oeil_gauche.stop().animate({transform: 'r0t0 0'}, 400, mina.easeout, function () {
		setTimeout(OuvreOeil, 5000);
	  });
	}
	OuvreOeil();

});