$(document).ready(function() 
{
	//获取canvas
	var canvas = $("#myCanvas").get(0);
	var context = canvas.getContext("2d");

	//每一个方格的边长
	var sideLength = 80;

	//存放所有格子的数组
	var box;

	//保存用户输入的数字
	var n;

	/*
		创建Box类:
		data:格子中的数字
		xPosition,yPosition:格子在画布中的位置
		index:格子在n*n的盒子中的顺序号
		vx,vy:格子当前移动的速度
		dista:格子运动的距离
	*/
	var Box = function(data, x, y, index)
	{
		this.data = data;
		this.xPosition = x * sideLength + 30;
		this.yPosition = y * sideLength + 20;
		this.index = index;
		this.vx = 0;
		this.vy = 0;
		this.distance = 0;
	}

	//点击开始后从后台获取乱序数组
	$(".submit").click(function()
	{
		n = $(".inputNum")[0].value;
		box = new Array();
		var  num = {"num" : n};        
		$.post("php/random.php", num, function(data, state)
		{
			if (!data) 
			{
				alert("数字输入错误！");
				return;
			}

			if (state) 
			{
				var k = 0;
				for (var i = 0; i < data.length; i++) {
					for (var j = 0; j < data.length; j++) {
						box.push(new Box(data[j][i], j, i, k++));
					}
				}
			}

			//初始化画布的大小
			canvas.height = parseInt(n) * sideLength + 30;
			canvas.width = parseInt(n) * sideLength + 30;
			createView();  
			window.addEventListener('keydown', doKeyDown, true);  
		}, "json");
	})

	/*
		根据box数组的内容，在画布上绘制视图，分四步：
		1.先清除之前的绘图
		2.遍历数组，根据位置坐标的属性绘制视图
		3.判断是否绘制完成（即移动过程是否完成）
		4.判断是否胜利
	*/
	function createView()
	{
		context.clearRect(0, 0, canvas.height, canvas.width);

		for (var i = 0; i < box.length; i++) {
			context.beginPath();

			box[i].xPosition += box[i].vx;
			box[i].yPosition += box[i].vy;
			box[i].distance += box[i].vx;
			box[i].distance += box[i].vy;

			if ((Math.abs(box[i].distance) == sideLength)) 
			{
				clearSpeed(box[i]);
			}

			if(box[i].data == 0)
			{	
				emptyBox = box[i];
				context.fillStyle = "#76FF6F";
				context.fillRect(box[i].xPosition, box[i].yPosition, sideLength - 1, sideLength - 1);
			}
			else
			{
				context.fillStyle="cornflowerblue";
				context.fillRect(box[i].xPosition, box[i].yPosition, sideLength - 1, sideLength - 1);
				context.fillStyle="#DEDFD8";
				context.font = 'bold 40px arial';
				context.textAlign = "center";
				context.fillText(box[i].data, box[i].xPosition + 38, box[i].yPosition + 52);
			}
		}

		//如果格子的distance没有被清空,说明格子运动并未终止
		if (emptyBox.distance)
		{
			//重绘视图
			setTimeout(createView, 33);	
		}

		//绘制完成则判断是否胜利
		else{
			if(ifWin())
			{
				alert("You Win!");
			}
		}

	}

	//点击画布就去获取鼠标的坐标值，然后处理点击事件
	canvas.onclick = function(e)
	{
		p = getEventPosition(e);		
		bindClick(box, p, context);	
	}

	//键盘事件
	function doKeyDown(e)
	{
		var keyID = e.keyCode ? e.keyCode :e.which; 
		var selectBox;

		//上
		n = parseInt(n);
		if(keyID === 38 )  
		{
			selectBox = findBox(n);
		}

		//下
		if(keyID === 40 )  
		{
			selectBox = findBox(-n);
		}
		//左
		if(keyID === 37 )  
		{
			selectBox = findBox(1);
		}
		//右
		if(keyID === 39)  
		{
			selectBox = findBox(-1);
		}

		moveBox(selectBox); 
	}

	//键盘事件发生后，寻找出可以移动的格子，并返回
	function findBox(diff)
	{

		for(var i = 0;i < box.length;i++)
		{
			if((emptyBox.index + diff) == box[i].index)
			{
				return box[i];
			}
		}
		return 0;
	}

	//获取鼠标点击的位置
	function getEventPosition(ev)
	{
		var x, y;
		if (ev.layerX || ev.layerX == 0) 
		{
			x = ev.layerX;
			y = ev.layerY;
		} 
		else if (ev.offsetX || ev.offsetX == 0) 
		{
			x = ev.offsetX;
			y = ev.offsetY;
		}
		return {x: x, y: y};
	}
	 
	//点击事件发生后，寻找点击的格子并处理
	function bindClick(box, p, context)
	{
		for (var i = 0; i < box.length; i++) {
			if (isThisBox(box[i], p)) 
			{
				moveBox(box[i]);
			}
		}
	}

	//根据鼠标的坐标和格子的坐标，寻找出被点击的格子
	function isThisBox(sBox, p)
	{
		if ((sBox.xPosition < p.x)&&((sBox.xPosition + sideLength) > p.x)) 
		{
			if ((sBox.yPosition < p.y)&&((sBox.yPosition + sideLength) > p.y)) 
			{
				return true;
			}
		}

		else
		{
			return false;
		}
	}

	/*
		格子移动的函数：
		1.根据被点击的格子与空格子的距离，判断当前格子能否移动
		2.可以移动时，要交换当前格子和空格子的在盒子中的顺序号
		3.给当前格子和空格子设置速度，开始移动
	*/
	function moveBox(sBox)
	{
		var dx = Math.abs(sBox.xPosition - emptyBox.xPosition);
		var dy = Math.abs(sBox.yPosition - emptyBox.yPosition);

		var distance = Math.sqrt((dx * dx) +(dy * dy));
		if(distance == sideLength)
		{
			var sIndex = sBox.index;
			var eIndex = emptyBox.index;

			sBox.index = eIndex;
			emptyBox.index = sIndex;
			setSpeed(sBox, emptyBox, sBox.xPosition, sBox.yPosition, emptyBox.xPosition, emptyBox.yPosition);

			createView();		
		}
	}
	/*
		给格子设置速度
		(x1, y1)：起始坐标
		(x2, y2): 目标坐标
	*/
	function setSpeed(sBox , emptyBox ,x1, y1, x2, y2)
	{
		sBox.vx = 10 * (x2 - x1)/sideLength;
		sBox.vy = 10 * (y2 - y1)/sideLength;
		emptyBox.vx = 10 * (x1 - x2)/sideLength;
		emptyBox.vy = 10 * (y1 - y2)/sideLength;
	}

	//速度归零，distancs归零
	function clearSpeed(sBox)
	{
		sBox.vx = 0;
		sBox.vy = 0;
		sBox.distance = 0;
	}

	//判断是否胜利
	function ifWin()
	{
		for(var i = 0;i < box.length;i++)
		{
			if(box[i].data != box[i].index)
			{
				return false;
			}
		}
		return true;
	}
})