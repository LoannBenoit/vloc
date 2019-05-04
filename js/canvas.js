var signature = {

    // define variables for mouse coordinates
    mouseX: 0,
    mouseY: 0,
    lastX: -1,
    lastY: -1,
    mouseDown: 0,

   // Draw a line between lastX/Y and current X/Y with custom size
    drawLine: function (ctx, x, y, size) {

        // Init the last X/Y position to current X/Y
        if (signature.lastX == -1) {
            signature.lastX = x;
            signature.lastY = y;
        }

        ctx.strokeStyle = '#45505b';
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(signature.lastX, signature.lastY);
        ctx.lineTo(x, y);
        ctx.lineWidth = size;
        ctx.stroke();
        ctx.closePath();

        signature.lastX = x;
        signature.lastY = y;

        // Show the submit button
        document.getElementById('submit').style.visibility = 'visible';
    },

        // Get the mouse position on canvas
        getPosition: function (e) {
            if (!e)
                var e = event;
    
            if (e.offsetX) {
                signature.mouseX = e.offsetX;
                signature.mouseY = e.offsetY;
            } else if (e.layerX) {
                signature.mouseX = e.layerX;
                signature.mouseY = e.layerY;
            }
        },
  
    // Init the canvas
    init: function () {
        // Define the canvas context
        ctx = document.getElementById('signature').getContext('2d');

        document.getElementById('submit').style.visibility = 'hidden';


        // Begin the line when mouse button is down
        document.getElementById('signature').addEventListener('mousedown', function(){
            signature.mouseDown = 1;
            signature.drawLine(ctx, signature.mouseX, signature.mouseY, 4);
            document.getElementById('reset').style.display = 'block';
            document.getElementById('submit').style.visibility = 'hidden';  
        });

        // Draw the line when mouse is moving
        document.getElementById('signature').addEventListener('mousemove', function(e){
            // Update the mouse co-ordinates when moved
            signature.getPosition(e);

            // Draw the line when by holding the button down
            if (signature.mouseDown == 1) {
                signature.drawLine(ctx, signature.mouseX, signature.mouseY, 4);
            }
        });

        // Stop drawing when mouse button is up
        window.addEventListener('mouseup', function(){
            signature.mouseDown = 0;
            // reset the last X/Y coordinates
            signature.lastX = -1;
            signature.lastY = -1;
        });

        // Reset the canvas on click "Effacer"
        document.getElementById('reset').addEventListener('click', function () {
            ctx.clearRect(0, 0, document.getElementById('signature').width, document.getElementById('signature').height);
            document.getElementById('reset').style.display = 'none';
            document.getElementById('submit').style.visibility = 'hidden';
        });

    },

}