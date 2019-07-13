$(() => {
  // console.log(location.search.substring(4));
  let id = parseInt(location.search.substring(4));
  // 得到id之后，去数组里面查找出对应的数据
  // 遍历数组，找出和我的id一样的一个对象把数据写到页面里面
  // 数组.filter 用于对数组里面的数据进行筛选，返回一个新的数组
  // let arr = phoneData.filter(function(e,i){
  //   return e.pID == id;
  // })
  // console.log(arr);

  // 数组里面查找满足条件的元素
let obj=phoneData.find(e=>{
	return e.pID==id;
});
$(".sku-name").text(obj.name);
$(".preview-img>img").attr("src",obj.imgSrc);
$(".summary-price em").text("￥"+obj.price)
let add=$(".choose-amount .add");
let reduce=$(".choose-amount .reduce");
let num=parseInt($(".choose-number").val());
add.click(function(){
	num++
	if(num>1){
		reduce.attr("class","reduce");
	}
	$(".choose-number").val(num);
});
reduce.click(function(){
	if(num==1){
		return;
	}
	--num;
	if(num==1){
		reduce.attr("class","reduce disabled");
	}
	$(".choose-number").val(num);
});

//------------点击加入购物车功能
$(".addshopcar").click(function(){
	//把当前对应的商品信息加入到购物车并存储信息到本地存储   图片，名字单价数量pID  数量未知需获取
	var number=parseInt($(".choose-number").val());
	var jsonStr=localStorage.getItem("shopCarData");
	var arr;
	if(jsonStr===null){
		arr=[];
	}else{
		arr=JSON.parse(jsonStr);
	}
	var good={
		pID:obj.pID,
		name: obj.name,
		price: obj.price,
		imgSrc: obj.imgSrc,
		number: number
	}
	console.log(good);
	arr.push(good);
	console.log(arr);
	jsonStr=JSON.stringify(arr);
	console.log(jsonStr);
	localStorage.setItem("shopCarData",jsonStr);
	});
});