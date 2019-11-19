$(document).ready(function()
{	
	$.get('gangs.xml', function(d){
		$(d).find('gang').each(function(){
			var $gang = $(this); 
			var title = $gang.attr("title");
			var that = $('#gangSelectionFilter'); // that = the courses select
			$('<option>').text($(this).attr('title')).appendTo(that);
		});
	}); 
	$.get('gangcard.xml', function(d){
		$(d).find('card').each(function(){
		var name = $(this).find('cardTitle').text();
		var gang = $(this).find('cardGang').text();
		var condition = $(this).find('cardCondition').text();
		var description = $(this).find('cardDescription').text();
		var card ="<div class='cardbox optionsCard randomAvailable "+gang+"'><div class='cardTitleContainer "+gang+"'><div class='cardTitle'>"+name+" <br/> "+gang+"</div><div class='cardSelect'>Add</div></div><div class='cardDetails'>"+condition+"</div><div class='cardDetails'>"+description+"</div></div></div>" 
		$( "#cardOptionsContainer" ).append( card );
		});
		$(".cardSelect").click(function(){
			$( "#selectedCards" ).append( $(this).parent().parent() );
			$( $(this).parent().parent() ).removeClass( "optionsCard" )
			$( $(this) ).text( "Clear" );
			$( $(this) ).addClass( "cardDeselect" );
			$( $(this) ).removeClass( "cardSelect" );
			$( $(this).parent().parent() ).removeClass( "randomAvailable" );
			$(".cardDeselect").click(function(){
				$( "#cardOptionsContainer" ).append( $(this).parent().parent() );
				$( $(this).parent().parent() ).addClass( "optionsCard" );
				$( $(this) ).text( "Add" );
				$( $(this) ).addClass( "cardSelect" );
				$( $(this) ).removeClass( "cardDeselect" );;
				$( $(this).parent().parent()  ).addClass( "randomAvailable" )
			});

		});
		$("#selectRandom").click(function(){
			things = $('.randomAvailable');
			var wotsit = ($(things[Math.floor(Math.random()*things.length)]));
			$( "#selectedCards" ).append(wotsit);
			$(wotsit).removeClass( "optionsCard" );
			$(wotsit).removeClass( "randomAvailable" );
			$($( wotsit ).find( ".cardSelect" )).text( "Clear" );
			$($( wotsit ).find( ".cardSelect" )).addClass( "cardDeselect" );
			$($( wotsit ).find( ".cardSelect" )).removeClass( "cardSelect" );


			}); 
	}); 
	$('#gangSelectionFilter').change(function(){0
		var selectedGang = ($(this).val());
		var general = "General";
		if (selectedGang == "")
		{
			$( ".optionsCard" ).each(function() 
			{
				if (!$( this ).is(":visible"))
				{
				($(this).show());
				$( $(this).addClass( "randomAvailable" ))
				}
			});
		}
		else
		{
			$( ".optionsCard" ).each(function( ) {
				if (!$( this ).hasClass( selectedGang ))
				{	
					if (!$( this ).hasClass( general ))
						{	
							($(this).hide());
							$( $(this).removeClass( "randomAvailable" ))
						}
				}
			});
		}
	})
});



