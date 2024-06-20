$(document).ready(function(){		   
			   
						   
						   
						   
$(".hide").hide();
$(".les_liens_cacher").hide();
$(".cache").hide();
$(".la_news_cacher").hide();
$(".chargement_menu").hide();
$(".chargement_menu2").show();
$(".chargement_menu2").css("display","block");
$("#plus_de_news").show();	
$(".open_me").show();
$("#to_show_at_start").show();
$("#to_hide_at_start").hide();
$("#strip_area_test").hide();







$("#strip_area_test").show(1000);





$("#option_donjon").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_donjon").show(500);	      
});

$("#option_quete").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_quete").show(500);	      
});

$("#option_drop").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_drop").show(500);	      
});

$("#option_xp").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_xp").show(500);	      
});

$("#option_chasse").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_chasse").show(500);	      
});

$("#option_kralamour").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_kralamour").show(500);	      
});

$("#option_donjon_creer").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_donjon_creer").show(500);	      
});

$("#option_quete_creer").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_quete_creer").show(500);	      
});

$("#option_drop_creer").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_drop_creer").show(500);	      
});

$("#option_xp_creer").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_xp_creer").show(500);	      
});

$("#option_chasse_creer").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_chasse_creer").show(500);	      
});

$("#option_kralamour_creer").click(function() {
	   $(".hide_option").hide(200);
	   $("#to_show_with_option_kralamour_creer").show(500);	      
});






$(".bouton_rejoindre").click(function() {
	   $(".bouton_rejoindre").slideDown();
	   $(this).hide();
	   $(".hide_jquery").slideUp(500);
       $(this).next("div.hide_jquery").slideDown(500);
	   
});



$("#option_multi_non").click(function() {
	   $(".hide_option_2").hide(200);
	   $("#to_show_with_option_multi_non").show(500);	      
});

$("#option_multi_oui").click(function() {
	   $(".hide_option_2").hide(200);
	   $("#to_show_with_option_multi_oui").show(500);	      
});

$("#option_multi_non_creer").click(function() {
	   $(".hide_option_2").hide(200);
	   $("#to_show_with_option_multi_non_creer").show(500);	      
});

$("#option_multi_oui_creer").click(function() {
	   $(".hide_option_2").hide(200);
	   $("#to_show_with_option_multi_oui_creer").show(500);	      
});









/*
$(".form_to_aventure input").blur( function() { 
$("input[name$='login']").css("background-color","#DDFFE0").css("border-color","#3FF001").css("color","#469D28");		

} );
*/



$(".news_en_evidence").fadeOut(500);
$(".news_en_evidence").fadeIn(500);
$(".news_en_evidence").fadeOut(500);
$(".news_en_evidence").fadeIn(500);

$(".ban_img").fadeOut(500);
$(".ban_img").fadeIn(500);
$(".ban_img").fadeOut(500);
$(".ban_img").fadeIn(500);

$("#plus_de_news").hover(function(){
   $(this).css("color","#009900"); 
 },function(){   
   $(this).css("color","#FF9933");  
 });

$("#moins_de_news").hover(function(){
   $(this).css("color","#FF0000"); 
 },function(){   
   $(this).css("color","#FF9933");  
 });

$("#plus_de_news").click(function() {
	   $("#masquer_news").slideDown(2000)	   
	   $("#plus_de_news").hide();
	   $("#moins_de_news").show();	   
});

$("#moins_de_news").click(function() {
	   $("#masquer_news").slideUp(2000)	
	   $("#moins_de_news").hide();	
	   $("#plus_de_news").show();	      
});











$(".ouvrir_lien").click(function() {
	   $(".les_liens_cacher").slideUp(500);
       $(this).next("div.les_liens_cacher").slideDown(500);
});


$(".lire_plus").click(function() {
       $(this).next("div.la_news_cacher").show(500);
	   $(this).hide(500);
});

$(".open_jquery").click(function() {
	   $(".open_jquery").slideDown(200);
	   $(".to_open_with_jquery").slideUp(500);
       $(this).next("div.to_open_with_jquery").slideDown(500);
	   $(this).slideUp(200);
});

$(".annuler_open_jquery").click(function() {	   
	   $(".to_open_with_jquery").slideUp(500);
	   $(".open_jquery").slideDown(200);
});





$(function() {
        $('.image').lightBox();
});

}); 





/*
$(document).ready(function() {
 $("#fomulaire1").hide();					   
 $("#fomulaire2").hide();		
 $("#message_box_ok").hide();
  $("#message_box_error").hide();
 $(".hide_list").hide();
 $(".input").hide();
 $("span.affichec2").hide();
 
 
 
 var skin = {};
skin['HEIGHT'] = '400';
skin['BORDER_COLOR'] = '#cccccc';
skin['ENDCAP_BG_COLOR'] = '#e0ecff';
skin['ENDCAP_TEXT_COLOR'] = '#333333';
skin['ENDCAP_LINK_COLOR'] = '#0000cc';
skin['ALTERNATE_BG_COLOR'] = '#ffffff';
skin['CONTENT_BG_COLOR'] = '#ffffff';
skin['CONTENT_LINK_COLOR'] = '#0000cc';
skin['CONTENT_TEXT_COLOR'] = '#333333';
skin['CONTENT_SECONDARY_LINK_COLOR'] = '#7777cc';
skin['CONTENT_SECONDARY_TEXT_COLOR'] = '#666666';
skin['CONTENT_HEADLINE_COLOR'] = '#333333';
google.friendconnect.container.setParentUrl('/');
google.friendconnect.container.renderMembersGadget( { id: 'div-1228429941655',   site: '07570805677476069306'},  skin);
 
 

   
 
 $("#message_box_ok").fadeTo("slow", 0.9);    
	
 $("#message_box_error").fadeTo("slow", 0.9); 

   
   
   
 
 if ($("#message_box_ok").is(":hidden")) {
        $("#message_box_ok").slideDown(400);
      } else {
        $("#message_box_ok").hide();
   }
   
    if ($("#message_box_error").is(":hidden")) {
        $("#message_box_error").slideDown(400);
      } else {
        $("#message_box_error").hide();
}
   
   
 $("#message_box_error").fadeTo(4000, 0.8); 
 $("#message_box_error").slideUp("slow");

 $("#message_box_ok").fadeTo(4000, 0.8); 
 $("#message_box_ok").slideUp("slow");

 
$(".lien_cacher_panoplie").hide();
$(".lien_cacher_arme").hide();
$(".lien_cacher_equipement").hide();
$(".lien_cacher_perso").hide();	 
$(".lien_cacher_metier").hide();	 
$(".lien_cacher_monstre").hide();	
$(".lien_cacher_parchemin").hide();
$(".lien_cacher_episode").hide();


	$("#lien_infoperso").click(function() {
			$("#fomulaire1").show(400);			
			$("#fomulaire2").hide();	
			$("#lien_infoperso").hide();	
			$("#lien_mdpperso").show();	
			
	});	
	
	$("#lien_mdpperso").click(function() {
			$("#fomulaire2").show(400);			
			$("#fomulaire1").hide();	
			$("#lien_mdpperso").hide();	
			$("#lien_infoperso").show();	
	});	

	$(".table_list_input input").click(function() {
       $(this).select();	   
	});
	
	$(".table_list_input_nb input").click(function() {
       $(this).select();	   
	});
	
	$(".se_log input").click(function() {
       $(this).select();	   
	});
	
	$(".caract_to_select input").click(function() {
       $(this).select();	   
	});	
	
	$(".recherche_form input").click(function() {
       $(this).select();	   
	});
	
	$(".searchformtop input").click(function() {
       $(this).select();	   
	});
	
	
	
	







 
 	$(".lien_affiche_panoplie").click(function() {
		$(".lien_cacher_panoplie").show(400);	
        $(".lien_cacher_monstre").hide(400);		 
		$(".lien_cacher_arme").hide(400);
		$(".lien_cacher_equipement").hide(400);		
		$(".lien_cacher_perso").hide(400);	
		$(".lien_cacher_metier").hide(400);	
		$(".lien_cacher_parchemin").hide(400);	
		$(".lien_cacher_episode").hide(400);
	});	
 
 
 
 	$(".lien_affiche_monstre").click(function() {
        $(".lien_cacher_monstre").show(400);		 
		$(".lien_cacher_arme").hide(400);
		$(".lien_cacher_equipement").hide(400);		
		$(".lien_cacher_perso").hide(400);	
		$(".lien_cacher_metier").hide(400);	
		$(".lien_cacher_panoplie").hide(400);	
		$(".lien_cacher_parchemin").hide(400);	
		$(".lien_cacher_episode").hide(400);
	});	
 
 	$(".lien_affiche_metier").click(function() {
        $(".lien_cacher_metier").show(400);		 
		$(".lien_cacher_arme").hide(400);
		$(".lien_cacher_equipement").hide(400);		
		$(".lien_cacher_perso").hide(400);	
		$(".lien_cacher_monstre").hide(400);	
		$(".lien_cacher_panoplie").hide(400);	
		$(".lien_cacher_parchemin").hide(400);	
		$(".lien_cacher_episode").hide(400);
	});	
 
 	$(".lien_affiche_perso").click(function() {
        $(".lien_cacher_perso").show(400);		 
		$(".lien_cacher_arme").hide(400);
		$(".lien_cacher_equipement").hide(400);		
		$(".lien_cacher_metier").hide(400);	
		$(".lien_cacher_monstre").hide(400);	
		$(".lien_cacher_panoplie").hide(400);	
		$(".lien_cacher_parchemin").hide(400);	
		$(".lien_cacher_episode").hide(400);
	});	
 
 	$(".lien_affiche_arme").click(function() {
         $(".lien_cacher_arme").show(400);
		 $(".lien_cacher_equipement").hide(400);
		 $(".lien_cacher_perso").hide(400);	 		
		 $(".lien_cacher_metier").hide(400);	
		 $(".lien_cacher_monstre").hide(400);	
		 $(".lien_cacher_panoplie").hide(400);	
		 $(".lien_cacher_parchemin").hide(400);	
		 $(".lien_cacher_episode").hide(400);
	});	
	
	$(".lien_affiche_equipement").click(function() {
         $(".lien_cacher_equipement").show(400);
		 $(".lien_cacher_arme").hide(400);
		 $(".lien_cacher_perso").hide(400);	 
		 $(".lien_cacher_metier").hide(400);	
		 $(".lien_cacher_monstre").hide(400);
		 $(".lien_cacher_panoplie").hide(400);	
		 $(".lien_cacher_parchemin").hide(400);	
		 $(".lien_cacher_episode").hide(400);
		 
	});	
	
		$(".lien_affiche_parchemin").click(function() {
		 $(".lien_cacher_parchemin").show(400);	
         $(".lien_cacher_equipement").hide(400);
		 $(".lien_cacher_arme").hide(400);
		 $(".lien_cacher_perso").hide(400);	 
		 $(".lien_cacher_metier").hide(400);	
		 $(".lien_cacher_monstre").hide(400);
		 $(".lien_cacher_panoplie").hide(400);	
		 $(".lien_cacher_episode").hide(400);
		
		 
	});	
		
		
		$(".lien_affiche_episode").click(function() {
		 $(".lien_cacher_parchemin").hide(400);	
         $(".lien_cacher_equipement").hide(400);
		 $(".lien_cacher_arme").hide(400);
		 $(".lien_cacher_perso").hide(400);	 
		 $(".lien_cacher_metier").hide(400);	
		 $(".lien_cacher_monstre").hide(400);
		 $(".lien_cacher_panoplie").hide(400);	
		 $(".lien_cacher_episode").show(400);
		
		 
	});
 
	$("span.affichec").click(function() {
       $(this).next("p.input").show(300);	   
	   $(this).hide();
	   $(this).next("p.input").next("span.affichec2").show();
	});	
	
	
	$("span.affichec2").click(function() {
       $(this).next("p.input").show(300);	   
	   $(this).hide();
	   $(this).next("p.input").next("span.affichec2").show();
	});
	
	 
  }); 
 

   
   
  

 



*/