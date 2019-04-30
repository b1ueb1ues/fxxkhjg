a = $('a')
console.log(a)

var uidblacklist = ['9236506','60153084'];
// var uidblacklist = ['993945'];   // fuckhjg for test

for (i=0; i<a.length; i++){
	//console.log(a[i])
//	if (a[i].href == 'http://bbs.ngacn.cc/nuke.php?func=ucp&uid=993945'
//	|| a[i].href == 'nuke.php?func=ucp&uid=993945'
//	){
        //if (a[i].innerHTML == '993945' && a[i].name == 'uid'){
        for (j=0; j<uidblacklist.length; j++){
                if (a[i].innerHTML == uidblacklist[j] && a[i].name == 'uid'){
                        console.log('--hjgfound')
                        tmp = a[i]
                        //console.log(a[i])

                        for(j=0; j<20; j++){
                                tmp = tmp.parentNode
                                if (tmp == null){
                                        break
                                }
                //		console.log(tmp.tagName)
                                if (tmp.tagName == 'TR'){
                                        tmp.innerHTML = 'fxxkyou'
                                        break
                                }
                        }
                //	console.log(tmp)
                //	console.log(tmp.tagName)
                        console.log('--delete')
                        //break;
                }
        }

}

a = $('.author')
console.log(a)
for (i=0; i<a.length; i++){
        for(j=0; j<uidblacklist.length; j++){
                console.log(a[i].href)
                console.log('/nuke.php?func=ucp&uid='+uidblacklist[j])
                console.log('---------')
                if (a[i].href == 'https://bbs.nga.cn/nuke.php?func=ucp&uid='+uidblacklist[j]
                        || a[i].href == 'https://bbs.nga.cn/nuke.php?func=ucp&uid='+uidblacklist[j] 
                        || a[i].href == '/nuke.php?func=ucp&uid='+uidblacklist[j] 
                        ){
        	//if (a[i].innerHTML == 'hjg719'){
                        console.log('--hjgfound')
                        tmp = a[i]
                        //console.log(a[i])

                        for(j=0; j<20; j++){
                                tmp = tmp.parentNode
                                if (tmp == null){
                                        break
                                }
                //		console.log(tmp.tagName)
                                if (tmp.tagName == 'TR'){
                                        tmp.innerHTML = 'fxxkyou'
                                        break
                                }
                        }
                //	console.log(tmp)
                //	console.log(tmp.tagName)
                        console.log('--delete')
                        //break;
                }
        }

}
console.log('aaaaaaaaaa');

