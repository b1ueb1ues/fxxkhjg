
function tagsplit(_tag){
	var len = _tag.length;
	var ret = [];
	var quoteflag = 0;
	var trancflag = 0;
	for (i=0; i<len; i++){
		a = _tag[i];
		if(quoteflag == 1){
			if(trancflag == 1){
				trancflag = 0;
				continue;
			}
			if ( a == '"'){
				quoteflag = 0;
				continue;
			}
		}
		if ( a == '"'){
			quoteflag = 1;
			continue;
		}
		if ( a == ' '){

		}
	}
}

function testuniq(_x){
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
			console.log('!')
			return -2; }
		else{
			return -1; }
	}


	//console.log(sptag);
	if (_x.tagName != 'DIV' && _x.tagName != 'SPAN'){
		y = document.getElementsByTagName(tn);
		if (y == null){
			return -1;}
		if ( y[0] == _x ){
			console.log('!')
			return -2; }
		else{
			return -1; }
	}
	
	for (i=0; i<attr.length; i++){
		jqcmd = tn + '[' + attr[i].name + '=' + '"' + attr[i].value + '"]';
		itemcatch = $(jqcmd)[0];
		console.log(itemcatch);
		if (itemcatch == _x){
			console.log('yes');
			return i; }
	}
	return -1;
}
/*
	//alert(_x.outerHTML);
	jqcmd = 'div[id="maincontent"]';
	tn = $(jqcmd)[0].outerHTML;
	
	y = document.getElementsByTagName(_x.tagName);
	//alert(y[0].outerHTML);
	if (y[0] == _x){
		return 1;
	}
	return 0;
	*/

function testequal(_x,_y){
	if (_x == _y){
		return 1; }
	return 0; }

		/*
		//alert(_x.outerHTML.split('>')[0]);

		tag = _x.outerHTML.split('>')[0] + '>';
		
		// plain tag
		if (tag.split(' ').length == 1){
			tagname = _x.tagName;
			tmp = document.getElementsByTagName(tagname)[0];
		
		}

		tmp = document.getElementsByTagName(tag);
		//alert(tmp[0].outerHTML);
		if (tmp[0] == _x){
		}
		return 1;
		//if (tag != '<div>'){
		//	//alert(1);
		//	return 1;
		//}
		//
	}
	*/

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
			xpath = '//' + tagname; }
			alert(xpath);
			return xpath;
		else if(ret == -1){
			alert('notfound2');}
			return -1;
		else{
			xpath = '//' + tagname + '[@' + attr[ret].name + '="' + attr[ret].value + '"]';}
			alert(xpath);
			return xpath;
	}
}
