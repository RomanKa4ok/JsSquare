'use strict';
(function() {
	var squareBtn = document.querySelector('.btn'),
		squareOutput = document.querySelector('.finished_array');
		squareBtn.onclick = makeItSquare;
	
})();

function makeItSquare(toSquare, arr) {
    var startArr = [1,2, 3, 4, 5];
    var finishedArr = [];
   

    function toSquare(arr) {
        for (var i = 0; i < arr.length; i++) {
            var x = arr[i] *arr[i];
            finishedArr.push(x);
            
        }
    }
    
    toSquare(startArr);
    alert(`До ${startArr}\. После ${finishedArr}`);
}
