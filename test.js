/**
 * Created by pantyblue on 2016/12/13.
 */


a = document.getElementsByTagName('a')
console.log('only div');


function testuniq(_x){
	//-2 only tagname
	//-1 notfound
	//n //tagname[@attr[n]=attr[n]]
	attr = _x.attributes;
	tn = _x.localName;

	//only tagname
	if (attr.length == 0){
		//only tagname
		if (_x.tagName == 'DIV'){
			//not div
			//console.log('only div');
			return -1;}

		y = document.getElementsByTagName(tn);
		if (y == null){
			return -1;}
		if ( y[0] == _x ){
			console.log('!');
			return -1; }
		else{
			return -1; }
	}
	//console.log(sptag);
	//alert(_x.tagName);
	if (_x.tagName != 'DIV' && _x.tagName != 'SPAN'){

		y = document.getElementsByTagName(tn);
		if (y == null){
			return -1; }
		if ( y[0] == _x ){
			console.log('!');
			return -2; }
		//else{ return -1; }
	}
	
	for (i=0; i<attr.length; i++){
		flag = 1;
		if (_x.tagName == 'IMG'){
			flag = 0;
			if(attr[i].name == 'itemprop'){
					flag = 1; }
			else if(attr[i].name == 'id'){
					flag = 1; }
			else if(attr[i].name == 'class'){
					flag = 1; }
		}
		if (flag == 0){continue;}

		if (attr[i].name == 'src'){
			continue; }
		else if (attr[i].name == 'href'){
			continue; }


		jqcmd = tn + '[' + attr[i].name + '=' + '"' + attr[i].value + '"]';
		//alert(jqcmd);
		itemcatch = $(jqcmd)[0];
		console.log(itemcatch);
		if (itemcatch == _x){
			console.log('catch!');
			return i; }
	}
	return -1;
}


function testequal(_x,_y){
	if (_x == _y){
		return 1; }
	return 0; }


function expath(){
	x = document.getSelection();
	xparent = x.baseNode.parentNode;
	y = document.getSelection();
	yparent = y.extentNode.parentNode;

	xx = xparent;
	i = -1;
	while(1){
		i += 1;
		if (i > 10){break;}
		
		yy = yparent;
		j = -1
		while(1){
			j += 1;
			if(j > 10){break;}
			if (testequal(xx,yy)){break;}
			else{
				yy = yy.parentNode;
				if (yy == null){break;}
			}
		}
		if(testequal(xx,yy)){
			break;}
		xx = xx.parentNode;
		if (xx == null){
			break;}
	}

	if( i == 11 && j == 11 ){
		alert('not found');
		return -1;
	}
	//fount same parent
	else{
		for (i=0; i<10; i++){
			ret = testuniq(xx);
			console.log('ret:'+ret);
			if (ret == -2){
				break;}
			else if (ret == -1){
				xx = xx.parentNode;
				if (xx == null){
					//alert('notfound2');
					break;}
				continue; }
			else{
				break; }
		}
		tagname = xx.localName;
		//alert(tagname);
		attr = xx.attributes;
		//alert(attr[ret].name);
		//alert(attr[ret].value);
		if (ret == -2){
			xpath = '//' + tagname; 
			alert(xpath);
			return xpath;}
		else if(ret == -1){
			alert('notfound2');
			return -1;}
		else{
			xpath = '//' + tagname + '[@' + attr[ret].name + '="' + attr[ret].value + '"]';
			alert(xpath);
			return xpath;
		}
	}
}

function eximg(_x){
	xx = _x
	//imgattr = _x.attributes;
	//console.log(imgattr);
	for (i=0; i<5; i++){
		ret = testuniq(xx);
		console.log('eximgret:'+ret);
		if (ret == -2){
			break;}
		else if (ret == -1){
			xx = xx.parentNode;
			if (xx == null){
				//alert('notfound2');
				break;}
			continue; }
		else{
			break; }
	}
	tagname = xx.localName;
	//alert(tagname);
	attr = xx.attributes;
	//alert(attr[ret].name);
	//alert(attr[ret].value);
	if (ret == -2){
		if (tagname != 'img'){
			xpath = '//' + tagname + '/img'; }
		else{
			xpath = '//' + tagname; }
		alert(xpath);
		return xpath;}
	else if(ret == -1){
		alert('notfound2');
		return -1;}
	else{
		if (tagname != 'img'){
			xpath = '//' + tagname + '[@' + attr[ret].name + '="' + attr[ret].value + '"]' + '/img' ; }
		else{
			xpath = '//' + tagname + '[@' + attr[ret].name + '="' + attr[ret].value + '"]' ; }
		alert(xpath);
		return xpath;
	}
}


bt = '';
bt += '<button id="miaopasi_title">标题</button>';
bt += '<button id="miaopasi_time">时间</button>';
bt += '<button id="miaopasi_content">正文</button>';

$('#pluginbutton').append(bt);

$("#miaopasi_title").click(function(event){
	data = expath();
    localStorage.setItem("miaopasi_title",data);
});

$("#miaopasi_time").click(function(event){
	data = expath();
    localStorage.setItem("miaopasi_time",data);
});


$("#miaopasi_content").click(function(event){
	data = expath();
    localStorage.setItem("miaopasi_content",data);
});


img = document.getElementsByTagName("img");
for (i=0; i<img.length; i++){
	img[i].oncontextmenu=function(event) {
		thisimg = event.target;
		eximg(thisimg);
		//console.log(thisimg);
		event.preventDefault();
	};
}
/*
window.onmousedown = function () {
	if (window.event) {
		if (event.button == 2) {
			alert('window btn2'); 
			x = document.getSelection();
			xparent = x.baseNode.parentNode;
			h = xparent.outerHTML;
			alert(h);
			
			
			return true;
		}
	}
}

window.oncontextmenu = function () {
	alert('window ctxtmenu');
}
*/

/**
 * Created by shuxin on 2016/11/30.
 */


function draw_draft_buttons(_count) {
    var ret = '';
    ret += '《<button id="xpath_draft_save_with_name">改名存</button>';
    ret += '<button id="xpath_draft_save">存</button>';
    ret += '<select id="xpath_draft" name="xpath_draft" autocomplete="on" >';
    var i;
    for (i = 0 ; i < _count; i ++ ){
        var _i = i+1;
        var name =  localStorage.getItem("xpath_"+_i+"_name");
        if(!name){
            name = '草稿 '+_i;
        }
        ret += '<option value="' + _i + '" '+(i == 0 ? 'selected="selected"' : '')+'>'+name+'</option>';
        //ret += '<option value="' + i + '" >草稿 '+(i+1)+'</option>';
        //ret += '<option value="' + i + '"  onchange="alert("1");">草稿 '+(i+1)+'</option>';
    }
    ret += '</select>';
    ret += '<button id="xpath_draft_load">取</button>';
    ret += '<button id="xpath_draft_export">导</button>';
    ret += '》';
    return ret;
}



$('#pluginbutton').append(draw_draft_buttons(20));

function get_xpath_list_for_preview(dom, xpath_name){
    var xpath_list = [];
    $(dom).find("input[name='" + xpath_name +"']").each(function () {
        var xpath = $(this).val();
        if (xpath){
            xpath_list.push(xpath)
        }
    });
    return xpath_list;
}

function escapeHtml(string) {
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}

function get_create_xpath_list_html(xpath_list, xpath_name, title){
    var xpath_str = "";
    xpath_str += '<label class="col-sm-4 control-label">' +title+'</label>'
    //   +
    // '<div class="col-sm-8" name="clean_rule">'
    var option_value = "";
    for (var i=0; i< xpath_list.length; i++) {
        // xpath_str += '<label class="col-sm-4 control-label">' +xpath_name+'</label>' +'<div class="col-sm-6" name="clean_rule"><input class="form-control" style="width: 400px" name="' + xpath_name + '" value=' + "'" + escapeHtml(xpath_list[i][1]) + "'" + '></div>'
        if(xpath_list[i][1] == "1"){
            option_rule = '<option value="1" selected>首词匹配</option><option value="2">正则匹配</option><option value="0">--无需规则--</option>'
        }
        else if(xpath_list[i][1] == "2"){
            option_rule = '<option value="2" selected>正则匹配</option><option value="1">首词匹配</option><option value="0">--无需规则--</option>'
        }
        else{
            option_rule = '<option value="0" selected>--无需规则--</option><option value="1">首词匹配</option><option value="2">正则匹配</option>'
        }
        xpath_str +=
            '<div class="col-sm-8" name="clean_rule">'+
            '<input class="form-control" style="width: 400px" name="' + xpath_name + '" value="' + escapeHtml(xpath_list[i][0]) + '">' +
            '<div class="row">' +
            '<div class="col-sm-4">' +
            '<select id="rule_type" class="form-control" name="rule_type">' +
            option_rule +
            '</select>' +
            '</div>' +
            '<div class="col-md-3">' +
            '<input type="text" class="form-control col-sm-3" value="' + escapeHtml(xpath_list[i][2]) + '" name="clean_value" style="width: 218px">' +
            '</div>' +
            '</div>'+
            '</div>'
    }
    if(xpath_list.length == 0){
        xpath_str +=
            '<div class="col-sm-8" name="clean_rule">'+
            '<input class="form-control" style="width: 400px" name="' + xpath_name + '" value= "">' +
            '<div class="row">' +
            '<div class="col-sm-4">' +
            '<select id="rule_type" class="form-control" name="rule_type">'+
            '<option value="0" >--无需规则--</option>'+
            '<option value="1" >首词匹配</option>'+
            '<option value="2" >正则匹配</option>'+
            '</select>' +
            '</div>' +
            '<div class="col-md-3">' +
            '<input type="text" class="form-control col-sm-3" value="" readonly name="clean_value" style="width: 218px">' +
            '</div>' +
            '</div>' +
            '</div>'}
    xpath_str += '<div class="new_'+xpath_name+' row"></div><br>'
        +'<button type="button" class="btn btn-primary" id="'+xpath_name+'" ac="clean_task">添加过滤xpath</button>' +'</div>'
    return xpath_str;
}

function create_page_type_xpath_html(xpath_list, page_type, page_name){
    var xpath_str = "";
    xpath_str += '<label class="col-sm-4 control-label">'+page_name+'</label>'+
        '<div class="col-sm-8">'
    if(xpath_list.length==0){
        xpath_str +=
            '<input type="text" class="form-control" name="'+page_type+'" style="width: 400px" value="">'
    }
    for (var i = 0; i < xpath_list.length; i++) {
        xpath_str +=
            '<input type="text" class="form-control" name="'+page_type+'" style="width: 400px" value='+ "'"+ xpath_list[i] + "'" + '>'
    }
    xpath_str += '<div class="new_'+page_type+' row"></div><br>'
        +'<button type="button" class="btn btn-primary" id="'+page_type+'" ac="add">添加'+page_name+'</button>' +'</div>'
    return xpath_str
}

function show_create_xpath_res(xpath_dict){
    var active_div = $('div[class="tab-pane active"]');
    $(active_div).find("input[name='title_xpath']").val(xpath_dict["title_xpath"]);
    $(active_div).find("input[name='content_xpath']").val(xpath_dict["content_xpath"]);
    $(active_div).find("input[name='title_image_xpath']").val(xpath_dict["title_image_xpath"]);
    $(active_div).find("input[name='publish_time_xpath']").val(xpath_dict["publish_time_xpath"]);
    $(active_div).find('input[name="title_image_attr"]').val(xpath_dict["title_image_attr"]);
    var clean_xpath_str = get_create_xpath_list_html(xpath_dict["clean_xpath"], "clean_xpath", "过滤xpath");
    $(active_div).find(".clean_xpath").html(clean_xpath_str);
    var video_xpath_str = create_page_type_xpath_html(xpath_dict["video_xpath"], "video_xpath", "视频xpath");
    var gallery_xpath_str = create_page_type_xpath_html(xpath_dict["gallery_xpath"], "gallery_xpath", "图集xpath");
    var table_xpath_str = create_page_type_xpath_html(xpath_dict["table_xpath"], "table_xpath", "表格xpath");
    var list_xpath_str = create_page_type_xpath_html(xpath_dict["list_xpath"], "list_xpath", "社交引文xpath");
    $(active_div).find(".video_xpath").html(video_xpath_str);
    $(active_div).find(".gallery_xpath").html(gallery_xpath_str);
    $(active_div).find(".table_xpath").html(table_xpath_str);
    $(active_div).find(".list_xpath").html(list_xpath_str);
}

function xpath_save(_id) {
    console.log("save"+_id);
    var active_div = $('div[class="tab-pane active"]');
    var title_xpath = $(active_div).find("input[name='title_xpath']").val();
    var content_xpath = $(active_div).find("input[name='content_xpath']").val();
    var title_image_xpath = $(active_div).find("input[name='title_image_xpath']").val();
    var title_image_attr = $(active_div).find("input[name='title_image_attr']").val();
    var video_xpath_list = get_xpath_list_for_preview(active_div, "video_xpath");
    var gallery_xpath_list = get_xpath_list_for_preview(active_div, "gallery_xpath");
    var table_xpath_list =  get_xpath_list_for_preview(active_div, "table_xpath");
    var list_xpath_list = get_xpath_list_for_preview(active_div, "list_xpath");
    var remark = $("#prefix_remark").val();
    var clean_list = [];
    $(active_div).find("div[name='clean_rule']").each(function () {
        var clean_xpath = $(this).find("input[name='clean_xpath']").val();
        var rule_type = $(this).find("select[name='rule_type']").val();
        var clean_value = $(this).find("input[name='clean_value']").val();
        var tmp_list = [];
        tmp_list = [clean_xpath,rule_type,clean_value];
        clean_list.push(tmp_list);
    });
    var xpath = {
        "title_xpath": title_xpath,
        "content_xpath": content_xpath,
        "title_image_xpath": title_image_xpath,
        "title_image_attr": title_image_attr,
        "clean_xpath": clean_list,
        "video_xpath": video_xpath_list,
        "gallery_xpath": gallery_xpath_list,
        "table_xpath": table_xpath_list,
        "list_xpath": list_xpath_list
    };
    var data = JSON.stringify(xpath);
    localStorage.setItem("xpath_"+_id,data);
}

function xpath_load(_id) {
    console.log("load"+_id);
    var data = localStorage.getItem("xpath_" + _id);
    if (data) {
        var _j = JSON.parse(data);
        if (_j) {
            show_create_xpath_res(_j);
        }

    }
}

$("#xpath_draft_load").click(function(event){
    var _d = $("select[id=xpath_draft]");
    if(_d){
        var _i = _d.val();
        xpath_load(_i);
    }
});

$("#xpath_draft_save").click(function(event){
    var _d = $("select[id=xpath_draft]");
    if(_d){
        var _i = _d.val();
        xpath_save(_i);
    }
});

$("#xpath_draft_save_with_name").click(function(event){
    var _d = $("select[id=xpath_draft]");
    if(_d){
        var _i = _d.val();
        var data = localStorage.getItem("xpath_" + _i + "_name");
        if(!data){
            data = "草稿" + _i;
        }
        var name = prompt("请输入草稿名字(下次刷新生效)",data);
        //alert(name);
        if(name) {
            localStorage.setItem("xpath_" + _i + "_name", name);
        }
        xpath_save(_i);
    }
});

$("#xpath_draft_export").click(function(event){
    var _d = $("select[id=xpath_draft]");
    if(_d){
        var _i = _d.val();
        var data = localStorage.getItem("xpath_" + _i);
        if (data) {
            var _j = JSON.parse(data);
            if (_j) {
            }else{
                data = "";
            }
        }
        var val2 = prompt("这是规则原始JSON，你可以复制/粘贴/修改，点击确定存入，点击取消放弃",data);
        //alert(name);
        if(val2) {
            localStorage.setItem("xpath_" + _i, val2);
        }
        xpath_save(_i);
    }
});

// $("#xpath_draft").change(function(){
//     alert('Selected value: ' + $(this).val());
// });
