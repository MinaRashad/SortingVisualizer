function square(contxt, canv, wait) {
	this.canv = canv
	this.high = Math.ceil(Math.random()*this.canv.height*2)
	this.wide =5
	this.pos = {
		x: 0,
		y:this.canv.height-this.high
	}

	this.pop = []
	this.stats = {
		height:this.high,
		pos:this.pos

	}
	this.num = 0
	this.ctx = contxt
	this.draw = function () {
		//randomise the heights
		this.high = Math.ceil(Math.random()*this.canv.height)
		//adjust y position due to its height
		this.pos.y = this.canv.height-this.high
		
		/**/

		/**/
		this.ctx.beginPath()
		
		this.ctx.rect(this.pos.x, this.pos.y, this.wide, this.high)
		
		this.ctx.fillStyle = "white"
		
		this.ctx.fill()
		
		this.ctx.closePath()
		this.pos.x = this.pos.x + this.wide
		//update stats
		this.stats.height= this.high
		this.stats.pos= this.pos

		//https://stackoverflow.com/questions/29050004/modifying-a-copy-of-a-javascript-object-is-causing-the-original-object-to-change
		//  /\  /\ /\ /\ /\
		//	||  || || || ||
		//Why Object.assign({},this.stats)
		const stats =  Object.assign({}, this.stats);
		this.pop.push(stats)
		//this.num = this.num +1
		
	}

	this.sorted = function (highs) {
		clearBg()
		//console.log("recieved!")
		this.pos.y = this.canv.height-this.high
		this.pos.x = 0
		this.highs = Array.from(highs)

		for (var i = 0; i <= this.highs.length-1; i++) {
			this.high = this.highs[i]
			//console.log("#")	
			this.pos.y = this.canv.height-this.high	
			this.ctx.beginPath()
			this.ctx.rect(this.pos.x, this.pos.y, this.wide, this.high)
		
			this.ctx.fillStyle = "white"
		
			this.ctx.fill()
			//console.log("##")
			this.ctx.closePath()
			//wait(200)
			//console.log("###")
			this.pos.x += this.wide
		}
		//console.log("====>>>"+this.highs)
	}
	this.insertion = function (highs, correctPlace) {
		clearBg()
		//console.log("recieved!")
		this.pos.y = this.canv.height-this.high
		this.pos.x = 0
		this.highs = Array.from(highs)
		this.crct = correctPlace;
		for (var i = 0; i <= this.highs.length-1; i++) {
			this.high = this.highs[i]
			//console.log("#")	
			this.pos.y = this.canv.height-this.high	
			this.ctx.beginPath()
			this.ctx.rect(this.pos.x, this.pos.y, this.wide, this.high)
			//console.log(this.crct)
			if (i != this.crct) {this.ctx.fillStyle = "white"} else {this.ctx.fillStyle = "red"}
//			console.log(correctPlace)
		
			this.ctx.fill()
			//console.log("##")
			this.ctx.closePath()
			//wait(200)
			//console.log("###")
			this.pos.x += this.wide
		}
		//console.log("====>>>"+this.highs)
	}
	this.end = function (arry) {
		this.pos.y = this.canv.height-this.high
		this.pos.x = 0
		this._high = []

		for (var i = 0; i < arry.length; i++) {
			this._high.push( arry[i].height)
		}

		for (var c = 0; i < arry.length; c++) {
			for (var i = 0; i < this.current; i++) {
				this.ctx.beginPath()
				this.ctx.rect(this.pos.x, this.pos.y, this.wide, this._high)
//				console.log(correctPlace)
				this.ctx.fillStyle = "green"
				this.ctx.fill()
				//console.log("##")
				this.ctx.closePath()
				//wait(200)
				//console.log("###")
				this.pos.x += this.wide
			}
		}

	}

	this.clearBg = function () {
		this.ctx.beginPath();
		this.ctx.rect(0, 0, this.canv.width , this.canv.height);
		this.ctx.fillStyle = "black";
		this.ctx.fill();
		this.ctx.closePath();

	}
}
