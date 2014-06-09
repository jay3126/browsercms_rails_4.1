//
//  Javascript libraries required for the Admin area of the CMS.
//
//= require jquery
//= require jquery_ujs
//= require jquery.cookie
//= require jquery.selectbox
//= require jquery.exists
//= require jquery.taglist
//= require jquery.ui.all
//= require cms/core_library
//= require cms/content_types
//= require cms/attachment_manager
//= require cms/form_builder
//= require cms/sitemap
//= require bootstrap
//= require ace/ace
//= require ace/theme-twilight
//= require ace/mode-html_ruby
//

$(document).ready(function(){
	var text_area = $('#page_template_body');
	if(text_area.length == 0){
		var text_area = $('#page_partial_body');
	}
	$(text_area).after('<div id="editor" style="height:500px;width:1000px;"></div>');
	$('#editor').text( $(text_area).val() );
	$(text_area).hide();
	var editor = ace.edit("editor");
  editor.setTheme("ace/theme/twilight");
  editor.getSession().setMode("ace/mode/html_ruby");
  editor.getSession().on('change', function(){
	  text_area.val(editor.getSession().getValue());
	});
})

