var ctx = null;
var Felder = 40
var kachel = 20
var Arr = []


window.onload = function () {
    var canvas = document.getElementById ('canvas');
    ctx = canvas.getContext('2d');
    Arr = Arrays(false)
    setInterval(step, 50)
}
function Nachbarzahl (xx, yy) {
        let count = 0
        for (let x = Math.max(xx-1 , 0); x <= Math.min(xx+1, Felder - 1); x++) {
            for (let y = Math.max(yy-1 , 0); y <= Math.min(yy+1, Felder - 1); y++) {
                if (!!Arr[x][y] && (x != xx || y != yy) ) {
                    count += 1
                }
            }
        }
        return count
    } 

function step() {
    let Arr2 = Arrays(true)
    for (let x in Arr) {
        for (let y in Arr[x]){
            let neighbors = Nachbarzahl(Number(x),Number(y))
            if (!Arr[x][y]) {
                if (neighbors === 3) {
                    Arr2[x][y] = true
                }
            } else {
                if (neighbors < 2 || neighbors > 3) {
                    Arr2[x][y] = false
                } else {
                    Arr2[x][y] = true
                }
            }
        }
    }
    Arr = Arr2
    drawField()
}
function Arrays (empty) {
    var Arr = []
    for (A = 0; A < Felder; A++) {
        let A = []
        Arr.push(A)
        for (a = 0; a < Felder; a++) {
            if (!!empty) {
                v = false
            } else {
                v = Math.random() > 0.8
            }            
            A.push(v)
        }
    }    
    return Arr;
}

function drawField () {
    ctx.fillStyle ="black"
    ctx.fillRect (0,0, canvas.width, canvas.height);
    ctx.fillStyle = "lime"
    for (var x=0; x < Felder; x++) {
        for (var y=0; y < Felder; y++) {
            if (Arr[x][y] == true){
                ctx.fillRect (x*kachel,y*kachel,kachel -2,kachel -2)
            }
        }
    }
    //ctx.fillRect ()
}