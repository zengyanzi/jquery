window.onload=function(){
	waterfall('main','box');
	var dataInt={"data":[{'src':'0.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'}]}
	window.onscroll=function(){
		if (checkScrollSlide()) {
			var oParent=document.getElementById('main');
			for (var i = 0; i < dataInt.data.length; i++) {
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="./images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main','box');
		};
	}
}

function waterfall(parent,box){
	//find all the class=box under main
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0,auto';
	var hArray=[];
	for (var i = 0; i < oBoxs.length; i++) {
		if (i<cols) {
			hArray.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArray);
			var index=getMinhIndex(hArray,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			//oBoxs[i].style.left=oBoxW*index+'px';
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			hArray[index]+=oBoxs[i].offsetHeight;
		}
	}
}
function getByClass(parent,clsname){
	var boxArr=new Array(), //save all the element class=box
		oElements=parent.getElementsByTagName('*');
	for (var i =0;i<oElements.length; i++) {
		if (oElements[i].className==clsname) {
			boxArr.push(oElements[i]);
		}
	};
	return boxArr;
	console.log(boxArr)
}
function getMinhIndex(arr,val){
	for (var i in arr) {
		if (arr[i]==val) 
			{return i;}
	};
}
//check if scroll 
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBox=getByClass(oParent,'box');
	var lastBoxH=oBox[oBox.length-1].offsetTop+Math.floor(oBox[oBox.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}