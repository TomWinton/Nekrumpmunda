$(document).ready(function()
{
	$('#phaseFilter').find('option').first().addClass('tingaling');
	$.get('gangsfortykay.xml', function(d){
		$(d).find('gang').each(function(){
			var $gang = $(this);
			var title = $gang.attr("title");
			var wotsit = $gang.attr("name");
			var that = $('#gangSelectionFilter');
			var tingaling =  ('<option class="tingaling">');
			 $(tingaling).text($(this).attr('title')).appendTo(that);// that = the courses select
			//$('<option>').text($(this).attr('title')).appendTo(that);

			var thingy = $('#phaseFilter');
			var doohicky =  ('<option class="gg'+title.replace(/ /g,'')+'">');
		 $(doohicky).text($(this).attr('name')).appendTo(thingy);
		});
	});

	$.get('gangcardfortykay.xml', function(d){
		$(d).find('card').each(function(){
		var name = $(this).find('cardTitle').text();
		var gang = $(this).find('cardGang').text();
		var cp = $(this).find('cp').text();
		var phase = $(this).find('phase').text();
		var condition = $(this).find('cardCondition').text();
		var description = $(this).find('cardDescription').text();
		var card ="<div class='cardbox optionsCard "+gang+"'><div class='cardTitleContainer "+gang+"'><div class='cardTitle'>"+name+" <br/> "+gang+": "+cp+"</div><div class='cardSelect'>"+phase+"</div></div><div class='cardCondition'>"+condition+"</div></div></div>"
		$( "#cardOptionsContainer" ).append( card );
		});

$('#phaseFilter option').first().addClass('tingaling');
		$("#filter").click(function()
		{
			filter();
			});
	});
	$("#gangSelectionFilter").change(function()
	{
		var wazaaaa = ($('#gangSelectionFilter').val());
		if (wazaaaa == "All")
		{
		$("#subfactionwrapper").hide();
		}
		else {
			$("#subfactionwrapper").show();
		}

		var selectedGang = ($('#gangSelectionFilter').val());
			if (selectedGang){
        var matchy = ("gg"+selectedGang.replace(/ /g,''));
		$('select option').each(function () {

			$(this).show();

				if (!$( this ).hasClass( matchy ) && !$( this ).hasClass( "tingaling" ) )
						{
							($(this).hide());
						}
					})
				}
$('#phaseFilter').prop('selectedIndex',0);

	});
	function filter()
{
	$( ".optionsCard" ).each(function()
	{
			$(this).show();
	});
	var selectedGang = ($('#gangSelectionFilter').val());
	var search = ($('#search').val().toLowerCase());
  var phase = ($('#phaseFilter').val());

	if (search)
	{
		$( ".cardTitle" ).each(function()
			{
				var matchkeyword = this.innerHTML.toLowerCase().includes(search);
				if (!matchkeyword)
					{
						($(this).parent().parent().hide());
					}
			});
		}
		if (selectedGang)
		{
			$( ".optionsCard" ).each(function()
					{
					if (!$( this ).hasClass( selectedGang ))
						{
							($(this).hide());
						}
					});
		}
		if (phase)
		{
			$( ".cardSelect" ).each(function()
				{
					var matchkeyword = this.innerHTML.includes(phase);
					if (!matchkeyword && !this.innerHTML.includes(selectedGang))
						{
							($(this).parent().parent().hide());
						}
				});
			}

	}

setTimeout(() => { 	var map = {};
	$('#phaseFilter').find('option').first().addClass('tingaling');
	($("#cardSelectionOptions").show());
			($("#loading").hide());
	$('select option').each(function () {
	  if (map[this.value]) {
	      $(this).remove()
	  }
	  map[this.value] = true;
	}); }, 500);



});
