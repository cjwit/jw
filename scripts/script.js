var renderContent = function(category) {
	var content = ''
	var category = eval(category)
	category.forEach(function(item) {
		html = "<div class='row portfolio-content'><div class='col-sm-3 col-sm-offset-1'><img src='";
		html += item.img;
		html += "' class='img-rounded img-responsive'></div><div class='col-sm-7'><h4 class='text-uppercase'>";
		html += item.name;
		html += "</h4><p>";
		html += item.description;
		html += "</p><p><a class='";
		html += item.type;
		html += " btn btn-default' href='";
		html += item.link;
		html += "'>Watch Video</a></p></div></div>"
		content += html
	})
	return content;
}

$(document).ready(function(){
	// render initial html
	$('#portfolio-container').html(renderContent(videos))

	// portfolio selector
	$('.selector').click(function(e) {
		var category = event.target.id
		$('.selector').removeClass('active')
		$(event.target).addClass('active')
		$('#portfolio-container').html(renderContent(category))
	})

	$(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});

})
