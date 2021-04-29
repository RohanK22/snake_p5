class body_segment{
    constructor(x,y,colour){
        this.x = x;
        this.y = y;
        this.colour = '#ff8000';
    }
    showSeg(c){
        fill(c);
        rect(this.x,this.y,sWidth,sWidth);
        noFill();
        

    }
    
};

class snake{
    constructor(){
        this.length= 3;
        this.headx = width/2;
        this.heady = height/2;
        this.bodySegments = [];
        for(let i=0;i<this.length;i++){
            this.bodySegments[i] = new body_segment(this.headx,this.heady+sWidth*i,'ff8000');
            
        }
        this.foodSegments = [];
        this.foodfreq=300;
        for(let i=0;i<width/this.foodfreq;i++){
            let foodx = int(random(rows)) * sWidth;
            let foody = int(random(cols)) * sWidth;
            this.foodSegments[i] = new body_segment(foodx,foody,'#00ff00');
            this.foodSegments[i].showSeg('#ff8000');
        }
        this.dead=false;
                
    }
    
   
    move()
    {   let NewHead,f=0;
        if(current==8 && !this.dead){
            NewHead = new body_segment(this.headx, this.heady-sWidth);f=1;
        } else if(current==2 && !this.dead){
            NewHead = new body_segment(this.headx, this.heady+sWidth);f=1;
        }else if(current==4 && !this.dead) {
            NewHead = new body_segment(this.headx-sWidth , this.heady);f=1;
        }else if(current==6 && !this.dead){
            NewHead = new body_segment(this.headx+sWidth, this.heady);f=1;
        }
        if(f==1){
            for(let j=this.length-1;j>0;j--){
                this.bodySegments[j]=this.bodySegments[j-1];
            }
            this.bodySegments[0]=NewHead;
            this.headx = NewHead.x;
            this.heady = NewHead.y;
                
            //Eat Food ... It's good for you
            for(let k = 0; k<width/this.foodfreq;k++){
                if(this.foodSegments[k].x==this.headx && this.foodSegments[k].y==this.heady){
                    this.foodSegments[k].x=10000;
                    this.foodSegments[k].y=10000;
                    //this.length+=1;
                    //this.bodySegments[this.length] = new body_segment(this.bodySegments[this.lenght-1]+sWidth, this.bodySegments[this.lenght-1]-sWidth);
                    
                    score++;  
                    frameRate(++framerate);
                }
            }
            //Food Empty
            let flag = 1;
            for(let k = 0; k<width/this.foodfreq;k++){
                if(this.foodSegments[k].x >width){
                    flag *= 2;
                }
            }
            if(flag >= pow(2,width/this.foodfreq)){
                for(let i=0;i<width/this.foodfreq;i++){
                    let foodx = int(random(rows)) * sWidth;
                    let foody = int(random(cols)) * sWidth;
                    this.foodSegments[i].x =foodx;
                    this.foodSegments[i].y= foody;
                    
                }
            }

            //Wall Hit
            if(NewHead.x > width || NewHead.x < -sWidth || NewHead.y > height + sWidth || NewHead.y <-sWidth){
                this.dead = true;
                alert("Poor Snake Died");
                window.location.href = "https://rohanalkhor.github.io/";
            }
        }

    }
    show(){
        for(let i=0; i<this.length;i++){
            if(i==0){
                this.bodySegments[i].showSeg('#00ff00');
            }
            else{
                this.bodySegments[i].showSeg('#ff8000');
            
            }
        }
        for(let i=0;i<width/this.foodfreq;i++){
            
            this.foodSegments[i].showSeg('#0000ff');
            
        }

    }
    
};