var pageCoords,
    newPageCoords,
    //offset = -175,
    offset = 0,
    //offsetPlusVal = 7.6,
    offsetPlusVal = 1,
    ping = $('#ping'),
    pingCx = $('#ping').attr('cx'),
    pingCy = $('#ping').attr('cy'),
    //moveVal = 320,
    moveVal = 0.1,
    
    // Initial colour in HSL format
    green = 'hsl(150,100%,15%)',
    incCol = 3,
    
    // Initial colour values split out
    eastColH = 150,
    eastColS = 100,
    eastColL = 15,
    behindColH = 150,
    behindColS = 100,
    behindColL = 15,
    westColH = 150,
    westColS = 100,
    westColL = 15,

    // Directional indicators
    eastInd = $('path#right'),
    behindInd = $('path#behind'),
    westInd = $('path#left');

eastInd.css('stroke', green);
behindInd.css('stroke', green);
westInd.css('stroke', green);

var a, b;

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
    alert("Sorry, your browser doesn't support Device Orientation");
}

function deviceOrientationListener(event) {
  
    $('.a span').text('A: ' + a);
    $('.b span').text('B: ' + b);
    
    var newPageCoords = event.pageX;

    a = event.alpha;

    if(a > b) {
      $('.delta').text('a > b');
      offset += offsetPlusVal;
      $('.objective').css('stroke-dashoffset', offset);
      
      if(pingCx >= 120 && pingCy >= 65) {
        pingCx = parseInt(pingCx) + moveVal;
        pingCy = parseInt(pingCy) + moveVal;
        movePing(false);
      }
    }
    else if(a < b) {
      $('.delta').text('b > a');
        offset -= offsetPlusVal;
        $('.objective').css('stroke-dashoffset', offset);
        if(pingCx > 120 && pingCy > 66) {
          movePing(true);
        }
    }

    setTimeout(function(){
        b = a;
    }, 3);
              
    pageCoords = newPageCoords;
}

var angle = 180;

function movePing(clockwise) {
  var speed = 100,
      temp;
  // increase the angle of rotation
  
  if(clockwise) {
    angle += speed * Math.PI / 180;
  }
  else {
    angle -= speed * Math.PI / 180;
  }
  angle = angle.toFixed(2);
  angle = parseFloat(angle);
  
  //  Reset the ball at a complete loop
  if(angle >= 186.16){
    angle = 179.92;
  }
  else if(angle <= 173.44) {
    angle = 179.84;
  }
  

  // calculate the new ball.x / ball.y
  var newX = 300 + 180 * Math.cos(angle);
  var newY = 300 + 180 * Math.sin(angle);
  
  ping.attr('cx', newX + 'px');
  ping.attr('cy', newY + 'px');
  
  console.log(angle);
  
  var midPoint;
    
  if(angle >= 180.34 && angle <= 182.5 || 
     angle >= 174.08 && angle <= 176.08) {
    // East
    if(angle > 177){
      midPoint = 181.32;
    }
    else {
      midPoint = 175.08;
    }
    
    eastColL = directionalBrightness(angle, midPoint, eastColL, clockwise);
    eastInd.css('stroke', 
                'hsl(150, 100%, ' + eastColL + '%');
  }
  
  if(angle >= 182 && angle <= 184.32 ||
     angle >= 175.68 && angle <= 177.68) {
    // South
    if(angle > 180) {
      midPoint = 183.04;
    }
    else {
      midPoint = 176.68;
    }
    
    behindColL = directionalBrightness(angle, midPoint, behindColL, clockwise);
    behindInd.css('stroke',
                 'hsl(150, 100%, ' + behindColL + '%');
  }
  
  if(angle >= 183.66 && angle <= 185.62 ||
     angle >= 177.36 && angle <= 179.36) {
    // West
    if(angle > 180) {
      midPoint = 184.64;
    }
    else {
      midPoint = 178.36;  
    }
    westColL = directionalBrightness(angle, midPoint, westColL, clockwise);
    westInd.css('stroke',
                 'hsl(150, 100%, ' + westColL + '%');
  }
}

// This function returns the brightness of the directional indicator,
//  either getting lighter or darker.
// Midpoint is calculated by the two angles the ping can move between
function directionalBrightness(angle, midPoint, direction, clockwise) {
  if(angle <= midPoint) {
      switch(clockwise) {
        case true:
          if(direction < 65) {
            direction += incCol;
          }
          break;
        case false:
          if(direction > 15) {
            direction -= incCol;
          }
          break;
      }
    }
    else {
      switch(clockwise) {
        case false:
          if(direction < 65) {
            direction += incCol;
          }
          break;
        case true:
          if(direction > 15) {
            direction -= incCol;
          }
          break;
      }
    }
    return direction;
}


// Initial calculation of ball position
var newX = 300 + 207 * Math.cos(angle);
var newY = 300 + 155 * Math.sin(angle);

ping.attr('cx', newX + 'px');
ping.attr('cy', newY + 'px');