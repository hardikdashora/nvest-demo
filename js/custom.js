$(document).ready(function(){
		// for gender selection
		$("#gender-selection").focusin(function(){
			$("#gender-dropdown").toggleClass("show");
		});	
		
		$("#gender-selection").focusout(function(){
			$("#gender-dropdown").removeClass("show");
		});	
		
		$("#male").on("click",function(){
			$(".selection").html("Male");
			$("#gender-dropdown").removeClass("show");
			$("#gender-selection").blur();
		});
		
		$("#female").on("click",function(){
			$(".selection").html("Female");
			$("#gender-dropdown").removeClass("show");
			$("#gender-selection").blur();
		});
		
		//for Number of members to insured
		
		$("#close-member").on("click",function(){
			$("#modal-container").addClass("hide");
		});
		
		$("#members").on("click",function(){
			$("#modal-container").removeClass("hide");
		});
		
		$('#continue-member').on("click",function(){
			$("#modal-container").addClass("hide");
		});
		
		if ($('#members-insured').is(':empty')){
		  	$('#members-label').removeClass("area-pincode-placeholder");
			$('#members-label').addClass("minified-insured");
		}
		
		
		
		
		$("input[type='checkbox']").click(function(){
			
			
		if($('#checked-you').prop('checked') == true) {
			
			$('#members-insured').append("<span>you<span>");
			
			/*
		//for the enter pincode section
		$("#pincode-text").on("click",function(){
			$("#pincode-text").addClass("minified");
			$("#enter-pin").removeClass("hide");
			$('#pincode-input').focus();
		});
		
		$("#pincode-text-holder").on("click",function(){
			$("#pincode-text").addClass("minified");
			$("#enter-pin").removeClass("hide");
			$('#pincode-input').focus();
		});
		
		$("#pincode-input").focusout(function(){
			$("#pincode-text").removeClass("minified");
			$("#enter-pin").addClass("hide");
		}); */
		
		} // if ends here
		
		if($('#checked-father').prop('checked') == true){
			
			$('#members-insured').append("<span>,Father</span>");
			var fatherChecked = "true";
			
		}
		
		if($('#checked-mother').prop('checked') == true){
			$('#members-insured').append("<span>,Mother</span>");
			var motherChecked = "true";
			
		}
		
		});
		
		//script for modal and pin
		
		$("#modal-your-pin").on("click",function(){
			$("#modal-your-pin").addClass("minified");
			$("#modal-your-pin").addClass("no-top");
			$("#modal-your-pin-input").removeClass("hide");
			$('#modal-your-pin-input').focus();
		});
		
		$("#modal-your-pin-input").focusout(function(){
			$("#modal-your-pin").removeClass("minified");
			$("#modal-your-pin").removeClass("no-top");
			$("#modal-your-pin-input").addClass("hide");
		});
		
		$("#modal-parents-pin").on("click",function(){
			$("#modal-parents-pin").addClass("minified");
			$("#modal-parents-pin").addClass("no-top");
			$("#modal-parents-pin-input").removeClass("hide");
			$('#modal-parents-pin-input').focus();
		});
		
		$("#modal-parents-pin-input").focusout(function(){
			$("#modal-parents-pin").removeClass("minified");
			$("#modal-parents-pin").removeClass("no-top");
			$("#modal-parents-pin-input").addClass("hide");
		});
		
		$("#modal-pincode").on("click",function(){
			$("#container-modal-pincode").addClass("hide");
		});
		
	});