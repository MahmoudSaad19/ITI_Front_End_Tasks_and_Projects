




		var canvas = document.getElementsByTagName("canvas")[0];
		var context = canvas.getContext('2d');
		var angle=0;
        var counter=0;
		
        
        
        
        function Rotation(){
            angle=0;
            context.save();
            canvas.width = canvas.width;
            context.restore();
            context.fillStyle = "rgba(0,0,255,0.3)";
            context.translate(280,280);
        
            for(var i=0; i<counter; i++){
                context.save();
                angle -= 30*Math.PI/180;
                context.rotate(angle);
                context.fillRect(0,0,40,150);
                context.restore();
                
            }
            counter--;
            if(counter==0){
                clearInterval(t2);
                Rotation2();
            }
            
        }
        
        function Rotation2(){
                t = setInterval(function(){
                context.save();
                angle -= 30*Math.PI/180;
                    
                if(angle<-Math.PI*2){
                    angle=0;
                    clearInterval(t);
                
                    t2 = setInterval("Rotation()",100);

                }

                context.rotate(angle);
                context.fillRect(0,0,40,150);
                context.restore();
                counter++;
            },300);
        }
        
        context.fillStyle = "rgba(0,0,255,0.3)";
        context.translate(280,280);
        
        var t;
        Rotation2();
        