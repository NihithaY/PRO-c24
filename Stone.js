class Stone{
	constructor(x,y,r){
		var options={
			restitution : 0.8,
			friction: 0.9,
			density: 12
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, 50,50, options)
		World.add(world, this.body);
	}

    display(){
        var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rect(10,70,10,50);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			
			pop()
    }

	};


	
			
	

