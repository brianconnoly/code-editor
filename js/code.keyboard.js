$(function() {
	
	shortcut.add("Ctrl+Q",function() {
		var type = $("<div>", {
                  className: "type jquery"
               });
    var selector = $("<div>", {
                  className: "element selector"
               });
    var line = $("<div>", {
                  className: "line"
               });
    selector.html('Выберите элемент');
    line.append(type).append(selector);
		editor.append(line).append(br);
		
	});
	
	shortcut.add("Ctrl+W",function() {
		return false;
	});

});
