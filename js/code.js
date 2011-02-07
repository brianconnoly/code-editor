// html elements
var file_list;
var editor;
var selected;

// system
var br;
var separator;

// loaded data
var project;
var dict;


$(function() {
	
	init();
	set_defaults();
	display_data();
	
	makeCodeArea(editor);
	
	file_list.click(function() {
		$('div.focused').blur();
		$('div.focused').removeClass('focused');
	});
});

function makeCodeArea(codearea) {
	
	codearea.click(function() {
		$(this).addClass('focused');
	});
	
}

// init
function init() {
	editor = $('#editor');
	file_list = $('#file_list');
	br = '<br>';
	separator = '<div class="separator"></div>';
}

// outout data
function display_data() {
	editor.html('');
	
	file = project.files[0];
	
	display_file(file);
}

function display_file(file) {
	var cnt = file.src.length;
	for(var i=0;i<cnt;i++) {
		append_element(file.src[i]);
	}
};

function append_element(element) {
	var line = $("<div>", {
								className: "line"
						 });
						 
	var type = $("<div>", {
								className: "type " + element.type
						 });
	
	line.append(type);
	
	// Прямое указание
	if(get_selector_name(element.selector) != element.selector) {
		var selector = $("<div>", {
						className: "element selector"
				 });
						 
		selector.html(get_selector_name(element.selector));
		
		line.append(selector);
	} else {
		// Составная выборка
		var sels = element.selector.split(' ');
		var cnt = sels.length;
		for(var i=0; i<cnt; i++) {
			if(i>0) line.append(separator);
			var selector = $("<div>", {
							className: "element selector"
					 });
							 
			selector.html(get_selector_name(sels[i]));
			
			line.append(selector);
		}
	}
	
	var cnt = element.actions.length;
	for(var i=0; i<cnt; i++) {
		if(i>0) line.append(separator);
		var action = $("<div>", {
						className: "element action"
				 });
						 
		action.html(get_dict_translate(element.actions[i].type));
		
		line.append(action);
	}
	
	editor.append(line).append(br);
};

function get_selector_name(selector) {
	var cnt = project.objects.length;
	for(var i=0; i<cnt; i++) {
		if(project.objects[i].selector == selector) return project.objects[i].name;
	}
	return selector;
};

function get_dict_translate(action) {
	var cnt = dict.length;
	for(var i=0; i<cnt; i++) {
		if(dict[i].value == action) return dict[i].name;
	}
	return action;
}
