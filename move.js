function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left, bottom, onDirChange){
        let direction = null;
        let x = left;
        let y = bottom;
        
        function moveCharacter(){
            if(direction === 'west'){
                x -= 1;
            }
            if(direction ==='north'){
                y += 1;
            }
            if(direction === 'east'){
                x += 1;
            }
            if(direction === 'south'){
                y -= 1;
            }
            
            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }
        
        setInterval(function(){
            if(x<0){
                x=1;
            }
            if(x>screen.width-100){
                x = screen.width-100;
            }
            if(y<0){
                y=1;
            }
            if(y>screen.height-200){
                y = screen.height-200;
            }
            moveCharacter()
        }, 1);
        
        document.addEventListener('keydown', function(e){    
            if(e.repeat) return;
            
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            if(onDirChange === true){
                onDirChange(direction);

            }
        });
        
        document.addEventListener('keyup', function(e){
            direction = null
            if(onDirChange === true){
                onDirChange(direction);

            }
        });
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }

}