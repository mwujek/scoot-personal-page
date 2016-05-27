var container = new Shape.Rectangle(new Point(-20, -20), new Size(view.bounds.width, view.bounds.height));
container.fillColor = "#fff";



//bounds 100-300 x and y
var maxY = container.bounds.y + container.bounds.height;
var minY = container.bounds.y;
var maxX = container.bounds.x + container.bounds.width;
var minX = container.bounds.x;

// make layer for animating items
var animationLayer1 = new Layer({
  position: container.center
});

// points
var totalPoints = 5;
var movingDot;
var pointXPos;
var pointYPos;
var polygonPoints = [];


for (var i = 1; i <= totalPoints; i++) {
  movingDot = "point" + i;
  pointXPos = Math.floor(Math.random() * ((maxX-minX)+1) + minX);
  pointYPos = Math.floor(Math.random() * ((maxY-minY)+1) + minY);

  var position = new Point (pointXPos, pointYPos);
  movingDot = new Shape.Circle (position, 1);
  movingDot.opacity = 0;
  movingDot.fillColor = "red";
  movingDot.blendMode = 'multiply';
  position.data = {
    xDirection: 'right',
    yDirection: "up"
  };
  polygonPoints.push(position);

}

var myPath = new Path();
// green
myPath.fillColor = "#65BB6A";
myPath.blendMode = 'multiply';

myPath.closed = true;
for (var i = 0; i <= polygonPoints.length - 1; i++) {
  myPath.add(polygonPoints[i]);
}

// second layer!
var animationLayer2 = new Layer();

// points
var totalPoints2 = 5;
var movingDot2;
var pointXPos2;
var pointYPos2;
var polygonPoints2 = [];


for (var i = 1; i <= totalPoints2; i++) {
  movingDot2 = "point" + i;
  pointXPos2 = Math.floor(Math.random() * ((maxX-minX)+1) + minX);
  pointYPos2 = Math.floor(Math.random() * ((maxY-minY)+1) + minY);
  var position2 = new Point (pointXPos2, pointYPos2);
  movingDot2 = new Shape.Circle (position2,1);
  movingDot2.fillColor = "red";
  movingDot2.opacity = 0;
  position2.data = {
    xDirection: 'right',
    yDirection: "up"
  };
  polygonPoints2.push(position2);

}

var myPath2 = new Path();
//blue
myPath2.fillColor = "#42A5F5";
myPath2.blendMode = 'multiply';


myPath2.closed = true;
for (var i = 0; i <= polygonPoints2.length - 1; i++) {
  myPath2.add(polygonPoints2[i]);
}

// third!!??
var animationLayer3 = new Layer();


// points
var totalPoints3 = 5;
var movingDot3;
var pointXPos3;
var pointYPos3;
var polygonPoints3 = [];


for (var i = 1; i <= totalPoints3; i++) {
  movingDot3 = "point" + i;
  pointXPos3 = Math.floor(Math.random() * ((maxX-minX)+1) + minX);
  pointYPos3 = Math.floor(Math.random() * ((maxY-minY)+1) + minY);
  var position3 = new Point (pointXPos3, pointYPos3);
  movingDot3 = new Shape.Circle (position3,1);
  movingDot3.fillColor = "none";
  movingDot3.opacity = 0;
  position3.data = {
    xDirection3: 'right',
    yDirection3: "up"
  };
  polygonPoints3.push(position3);

}

var myPath3 = new Path();
//red
myPath3.fillColor = "#FF7043";
myPath3.blendMode = 'multiply';


myPath3.closed = true;
for (var i = 0; i <= polygonPoints3.length - 1; i++) {
  myPath3.add(polygonPoints3[i]);
}

// // title
// var pathData = "M35.387 46.322V34.639l-3.701 11.683h-1.26l-3.701-11.683v11.683h-1.96V32.979h3.761l2.78 8.602l2.761-8.602h3.781v13.343 H35.387z M47.496 46.322c-0.2-0.72-0.28-1.16-0.34-2c-0.68 1.541-1.701 2.201-3.341 2.201c-1.92 0-3.261-1.24-3.261-3.021 c0-1.54 0.98-2.601 2.84-3.061c1.041-0.26 2-0.34 3.761-0.34v-0.74c0-1.021-0.7-1.521-2.101-1.521c-1.36 0-2.041 0.46-2.281 1.5 l-1.9-0.28c0.16-0.96 0.521-1.52 1.3-2.041c0.82-0.56 1.761-0.78 3.161-0.78c1.701 0 2.7 0.3 3.4 1.1 c0.5 0.6 0.6 1.1 0.6 2.541v4.441c0 0.6 0.1 1.3 0.3 2H47.496z M47.156 41.301c-2.841 0-4.321 0.7-4.321 2.1 c0 0.9 0.7 1.5 1.7 1.48c1.54 0 2.581-1.06 2.581-2.641V41.301z M56.934 46.322c-0.62 0.14-1.24 0.22-1.561 0.22c-0.84 0-1.62-0.3-2.1-0.78c-0.521-0.52-0.68-1.12-0.68-2.46V38.2h-1.221 v-1.741h1.36l0.2-2.561l1.82-0.16v2.72h2V38.2h-2v4.801c0 1.2 0.4 1.6 1.6 1.601c0.08 0 0.3 0 0.56-0.02V46.322z M64.085 46.322c-0.62 0.14-1.24 0.22-1.561 0.22c-0.84 0-1.62-0.3-2.101-0.78c-0.52-0.52-0.68-1.12-0.68-2.46V38.2h-1.221 v-1.741h1.36l0.2-2.561l1.82-0.16v2.72h2V38.2h-2v4.801c0 1.2 0.4 1.6 1.6 1.601c0.08 0 0.3 0 0.56-0.02V46.322z M84.727 46.322h-2.52l-2.661-9.802l-2.421 9.802h-2.46l-3.641-13.343h2.561l2.561 9.722l2.4-9.722h2.44l2.66 9.7 l2.521-9.722h2.12L84.727 46.322z M95.936 46.322v-2.141c-0.279 0.84-0.52 1.2-1.04 1.621c-0.58 0.48-1.28 0.72-2.081 0.72c-1.06 0-1.859-0.4-2.42-1.2 c-0.359-0.541-0.5-1.061-0.5-1.96v-6.902h2.28v6.421c0 0.5 0.1 0.8 0.2 1.081c0.24 0.4 0.7 0.7 1.2 0.7 c0.78 0 1.601-0.58 1.921-1.38c0.22-0.5 0.3-1.061 0.3-2.041v-4.741h2.22v9.862H95.936z M103.311 46.602c0 2.44-1.141 3.681-3.4 3.681c-0.361 0-0.641-0.02-1.141-0.12v-1.88c0.359 0 0.5 0 0.7 0 c1.26 0 1.58-0.36 1.58-1.72V36.459h2.221V46.602z M101.09 35.299v-2.32h2.221v2.32H101.09z M114.74 43.441c-0.66 2-2.182 3.081-4.381 3.081c-2.762 0-4.541-2-4.541-5.101c0-3.081 1.859-5.161 4.641-5.161 c2.84 0 4.4 1.9 4.4 5.401h-6.762v0.28c0.02 1.8 0.9 2.8 2.4 2.82c1.141 0 1.762-0.46 2.221-1.6L114.74 43.441z M112.6 40.221c-0.041-0.74-0.16-1.081-0.5-1.541c-0.42-0.56-1-0.86-1.721-0.86c-1.26 0-2.061 0.84-2.24 2.401H112.6z M124.236 46.322l-2.52-5.061l-2.182 2.46v2.601h-2.141V32.979h2.141v8.282c0.201-0.28 0.301-0.38 0.441-0.56l3.9-4.241h2.4 l-2.961 3.261l3.262 6.602H124.236z M11.057 65.121v-9.342h0.91v9.342H11.057z M19.431 65.121v-4.385c0-1.4-0.448-2.029-1.443-2.029c-1.261 0-2.171 1.092-2.171 2.619v3.795h-0.826v-6.904h0.826v1.303 c0.519-1.023 1.247-1.5 2.255-1.5c0.798 0 1.5 0.3 1.8 0.953c0.252 0.4 0.4 1 0.4 1.779v4.369H19.431z M24.007 63.174c0 1.1 0.3 1.5 1.3 1.486c0.224 0 0.434-0.016 0.784-0.07v0.658 c-0.504 0.07-0.742 0.084-0.966 0.084c-1.303 0-1.919-0.701-1.919-2.186v-4.271H21.78v-0.658h1.345v-1.709l0.882-0.084v1.793h1.625 v0.658h-1.625V63.174z M27.983 61.689c0 1.8 0.9 2.9 2.3 2.941c0.966 0 1.708-0.545 2.017-1.512l0.77 0.2 c-0.364 1.232-1.457 2.004-2.815 2.004c-1.933 0-3.194-1.43-3.194-3.586c0-2.213 1.303-3.713 3.236-3.713 c1.093 0 2 0.5 2.5 1.5c0.308 0.6 0.4 1.1 0.4 2.17H27.983z M32.339 61.031c-0.126-1.527-0.827-2.324-2.031-2.324 c-0.7 0-1.345 0.32-1.765 0.881c-0.294 0.393-0.42 0.729-0.532 1.443H32.339z M38.904 58.748c-0.224-0.027-0.336-0.041-0.491-0.041c-0.616 0-1.12 0.279-1.484 0.8 c-0.322 0.504-0.532 1.189-0.532 1.82v3.768H35.57v-6.904h0.742v1.596c0.435-1.275 1.051-1.793 2.101-1.793 c0.196 0 0.3 0 0.5 0.057V58.748z M45.163 65.121c-0.07-0.531-0.084-0.615-0.098-1.176c-0.63 0.994-1.317 1.373-2.465 1.4 c-1.485 0-2.438-0.826-2.438-2.115c0-1.486 1.289-2.354 3.46-2.354c0.322 0 0.4 0 1.4 0.057v-0.365 c0-1.344-0.504-1.834-1.891-1.834c-0.644 0-1.232 0.168-1.569 0.461c-0.238 0.197-0.364 0.436-0.434 0.869l-0.827-0.168 c0.14-0.688 0.378-1.051 0.911-1.387c0.477-0.309 1.135-0.463 1.933-0.463c1.064 0 1.8 0.3 2.3 0.8 c0.322 0.4 0.4 0.9 0.4 1.779v3.166c0 0.6 0 0.9 0.1 1.316H45.163z M45.064 61.6 c-0.938-0.057-1.135-0.07-1.527-0.07c-1.583 0-2.493 0.617-2.493 1.682c0 0.8 0.6 1.4 1.6 1.4 c1.443 0 2.451-1.135 2.451-2.76V61.605z M52.975 60.598c-0.14-1.205-0.784-1.891-1.779-1.891c-1.247 0-2.059 1.133-2.059 2.885c0 1.9 0.8 3 2 3 c0.953 0 1.625-0.699 1.807-1.891l0.785 0.182c-0.154 0.771-0.308 1.135-0.659 1.555c-0.49 0.561-1.106 0.842-1.905 0.8 c-0.925 0-1.653-0.352-2.171-1.051c-0.504-0.688-0.77-1.598-0.77-2.605c0-2.158 1.205-3.643 2.969-3.643 c1.373 0 2.2 0.8 2.5 2.396L52.975 60.598z M57.046 63.174c0 1.1 0.3 1.5 1.3 1.486c0.224 0 0.434-0.016 0.785-0.07v0.658 c-0.504 0.07-0.743 0.084-0.967 0.084c-1.303 0-1.919-0.701-1.919-2.186v-4.271h-1.401v-0.658h1.345v-1.709l0.882-0.084v1.793 h1.625v0.658h-1.625V63.174z M61.835 56.76h-0.953v-0.98h0.953V56.76z M61.779 65.121h-0.827v-6.904h0.827V65.121z M70.153 61.662c0 2.17-1.205 3.656-2.941 3.656c-1.849 0-3.04-1.443-3.04-3.656c0-2.172 1.205-3.643 2.998-3.643 C68.948 58 70.2 59.5 70.2 61.662z M65.054 61.662c0 1.8 0.8 3 2.1 2.969c1.358 0 2.143-1.105 2.143-2.969 c0-1.836-0.798-2.955-2.101-2.955C65.853 58.7 65.1 59.8 65.1 61.662z M76.928 65.121v-4.385c0-1.4-0.447-2.029-1.442-2.029c-1.261 0-2.171 1.092-2.171 2.619v3.795h-0.826v-6.904h0.826v1.303 c0.519-1.023 1.247-1.5 2.255-1.5c0.798 0 1.5 0.3 1.8 0.953c0.252 0.4 0.4 1 0.4 1.779v4.369H76.928z M87.791 55.779c1.457 0 2.3 0.3 3.1 1.135c0.756 0.8 1.2 2.1 1.2 3.529c0 1.652-0.504 2.982-1.429 3.8 c-0.729 0.645-1.472 0.883-2.788 0.883H84.85v-9.342H87.791z M85.76 64.338h2.031c2.186 0 3.292-1.318 3.292-3.895 c0-2.564-1.106-3.881-3.292-3.881H85.76V64.338z M94.762 61.689c0 1.8 0.9 2.9 2.3 2.941c0.966 0 1.709-0.545 2.016-1.512l0.771 0.2 c-0.365 1.232-1.457 2.004-2.816 2.004c-1.933 0-3.193-1.43-3.193-3.586c0-2.213 1.303-3.713 3.236-3.713 c1.092 0 2 0.5 2.5 1.5c0.309 0.6 0.4 1.1 0.4 2.17H94.762z M99.117 61.031c-0.125-1.527-0.826-2.324-2.03-2.324 c-0.7 0-1.345 0.32-1.765 0.881c-0.295 0.393-0.42 0.729-0.533 1.443H99.117z M102.42 63.049c0.209 1.1 1 1.6 2.3 1.596c1.178 0 1.934-0.518 1.934-1.344c0-0.672-0.42-1.023-1.414-1.219 l-1.416-0.252c-1.273-0.238-1.904-0.855-1.904-1.836c0-1.219 0.994-1.988 2.578-1.988c1.498 0 2.4 0.6 2.7 1.834l-0.77 0.2 c-0.238-0.842-0.967-1.318-2.018-1.318c-0.994 0-1.652 0.49-1.652 1.248c0 0.6 0.4 0.9 1.2 1.064l1.275 0.2 c1.008 0.2 1.4 0.3 1.8 0.688c0.35 0.3 0.5 0.7 0.5 1.26c0 1.346-1.092 2.158-2.885 2.2 c-0.926 0-1.598-0.197-2.145-0.631c-0.447-0.363-0.672-0.742-0.867-1.471L102.42 63.049z M110.609 56.76h-0.953v-0.98h0.953V56.76z M110.553 65.121h-0.826v-6.904h0.826V65.121z M118.746 57.908h-0.209c-0.645 0-0.939 0.252-1.037 0.924c0.393 0.5 0.6 1 0.6 1.7 c0 1.471-1.008 2.479-2.494 2.479c-0.307 0-0.518-0.041-0.967-0.168c-0.475 0.111-0.699 0.336-0.699 0.7 c0 0.5 0.3 0.7 1 0.686l1.945 0.029c0.631 0 1.1 0.1 1.4 0.266c0.531 0.3 0.8 0.8 0.8 1.3 c0 1.191-1.289 1.934-3.404 1.934c-1.961 0-3.082-0.658-3.082-1.807c0-0.672 0.365-1.135 1.08-1.359 c-0.477-0.225-0.701-0.545-0.701-1.051c0-0.588 0.295-0.967 0.896-1.162c-0.617-0.588-0.869-1.162-0.869-1.947 c0-1.443 1.051-2.451 2.578-2.451c0.547 0 0.9 0.1 1.4 0.379c0.197-0.896 0.52-1.178 1.332-1.178c0.139 0 0.2 0 0.3 0 L118.746 57.908z M114.502 64.898c-0.686 0.266-0.967 0.559-0.967 1.049c0 0.8 0.8 1.2 2.2 1.2 c1.625 0 2.479-0.42 2.479-1.219c0-0.674-0.434-0.91-1.68-0.939l-1.57-0.014c-0.027 0-0.111-0.014-0.238-0.027L114.502 64.898z M113.941 60.5c0 1.1 0.6 1.8 1.6 1.807c0.953 0 1.625-0.742 1.625-1.793c0-1.094-0.645-1.807-1.639-1.807 C114.586 58.7 113.9 59.4 113.9 60.5z M125.213 65.121v-4.385c0-1.4-0.449-2.029-1.443-2.029c-1.26 0-2.17 1.092-2.17 2.619v3.795h-0.828v-6.904h0.828v1.303 c0.518-1.023 1.246-1.5 2.254-1.5c0.799 0 1.5 0.3 1.8 0.953c0.252 0.4 0.4 1 0.4 1.779v4.369H125.213z M129.145 61.689c0 1.8 0.9 2.9 2.3 2.941c0.967 0 1.709-0.545 2.016-1.512l0.771 0.2 c-0.365 1.232-1.457 2.004-2.816 2.004c-1.932 0-3.193-1.43-3.193-3.586c0-2.213 1.303-3.713 3.236-3.713 c1.092 0 2 0.5 2.5 1.5c0.309 0.6 0.4 1.1 0.4 2.17H129.145z M133.5 61.031c-0.125-1.527-0.826-2.324-2.031-2.324 c-0.699 0-1.344 0.32-1.764 0.881c-0.295 0.393-0.42 0.729-0.533 1.443H133.5z M140.066 58.748c-0.225-0.027-0.336-0.041-0.49-0.041c-0.617 0-1.121 0.279-1.484 0.8 c-0.322 0.504-0.533 1.189-0.533 1.82v3.768h-0.826v-6.904h0.742v1.596c0.434-1.275 1.051-1.793 2.102-1.793 c0.195 0 0.3 0 0.5 0.057V58.748z";
// var wuj = new CompoundPath(pathData);
// wuj.position = [75,55];
// wuj.fillColor = '#666';
// wuj.blendMode = 'multiply';
// wuj.scale(1);



// var shape = new Rectangle( new Point(1, 1), new Size(150, 100));
// var cornerSize = new Size(8, 8);
// var clipCircle = new Shape.Rectangle(shape, cornerSize);
// //new Point(100, 100), 50)
// clipCircle.fillColor = "red";
// clipCircle.blendMode = "destination-in";

// var bordered = new Shape.Rectangle(shape, cornerSize);
// bordered.strokeColor = '#ddd';
// bordered.strokeWidth = 0.5

// animation

var frameCount;
var time;
var delta; // use for frame rate...seconds since the last frame event (event.delta)
// animation variables

var speed1 = 7;
var speed2 = 0.4;
function onFrame(event) {
  frameCount = event.count;
  time = event.time;
  delta = event.delta;
  var positions1 = [];
  var positions2 = [];
  var positions3 = [];
  for (var i = 0; i <= totalPoints - 1; i++) {
    var sinus = Math.cos(event.time * speed2 + i);
    var item = animationLayer1.children[i];
        //add positions to array
        positions1.push(item.position);
        // check directions
        if (item.bounds.right > maxX){
          item.data.xDirection = "left";
        }
        if (item.bounds.left < minX){
          item.data.xDirection = "right";
        }
        
        if (item.bounds.top < minY){
          item.data.yDirection = "down";
        }
        
        if (item.bounds.bottom > maxY){
          item.data.yDirection = "up";
        }
        
        // move item
        if (item.data.xDirection === "right"){
          item.position.x += item.bounds.width / speed1;
        } else {
          item.position.x -= item.bounds.width / speed1;
        }

        
        if (item.data.yDirection === "up"){
          item.position.y = (sinus * 125)  + (125);
        } else {
          item.position.y = (sinus * 125 )  + (125);
        }

    }

    for (var key in myPath.segments) {
      if (myPath.segments.hasOwnProperty(key)) {
        myPath.segments[key].point = positions1[key];
      }
    }
    myPath.smooth();


        // 2nd path
        for (var j = 0; j <= totalPoints2 - 1; j++) {
          var sinus2 = Math.sin(event.time * speed2 + j);
          var item2 = animationLayer2.children[j];
            //add positions to array
            positions2.push(item2.position);
            // check directions
            if (item2.bounds.right > maxX){
              item2.data.xDirection = "left";
            }
            if (item2.bounds.left < minX){
              item2.data.xDirection = "right";
            }
            
            if (item2.bounds.top < minY){
              item2.data.yDirection = "down";
            }
            
            if (item2.bounds.bottom > maxY){
              item2.data.yDirection = "up";
            }
            
            // move item
            if (item2.data.xDirection === "right"){
              item2.position.x = (sinus2 * 125 )  + (125);
            } else {
              item2.position.x = (sinus2 * 125 )  + (125);
            }
            
            if (item2.data.yDirection === "up"){
              item2.position.y -= item2.bounds.height / speed1;
            } else {
              item2.position.y += item2.bounds.height / speed1;
            }
            

        }

        for (var key2 in myPath2.segments) {
          if (myPath2.segments.hasOwnProperty(key2)) {
            myPath2.segments[key2].point = positions2[key2];
          }
        }
        myPath2.smooth();
        
        // third!!??
        // 2nd path
        for (var k = 0; k <= totalPoints3 - 1; k++) {
          var sinus3 = Math.cos(event.time * speed2 + k);
          var item3 = animationLayer3.children[k];
            //add positions to array
            positions3.push(item3.position);
            // check directions
            if (item3.bounds.right > maxX){
              item3.data.xDirection = "left";
            }
            if (item3.bounds.left < minX){
              item3.data.xDirection = "right";
            }
            
            if (item3.bounds.top < minY){
              item3.data.yDirection = "down";
            }
            
            if (item3.bounds.bottom > maxY){
              item3.data.yDirection = "up";
            }
            
            // move item
            if (item3.data.xDirection === "right"){
              item3.position.x = sinus3 * maxX + (minX*2);
            } else {
              item3.position.x = sinus3 * maxX + (minX*2);
            }
            
            if (item3.data.yDirection === "up"){
              item3.position.y -= item3.bounds.height / speed1;
            } else {
              item3.position.y += item3.bounds.height / speed1;
            }

        }

        for (var key3 in myPath3.segments) {
          if (myPath3.segments.hasOwnProperty(key3)) {
            myPath3.segments[key3].point = positions3[key3];
          }
        }
        myPath3.smooth();
        
    }