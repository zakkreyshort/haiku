import { Haiku } from './../src/haiku.js'; 

$(document).ready(function(){
    $("form").submit(function(event){
			event.preventDefault();
			var line1 = $().val();
			var line2 = $().val();
			var line3 = $().val();

			var haiku = new Haiku(line1, line2, line3);
			
		})
})