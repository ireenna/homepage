(function () {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
            if (isElementNotInViewport(items[i])) {
                items[i].classList.remove("in-view");
            }
        }
    }
    function isElementNotInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 450
        );
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();


// function printText( el ){

// 	let letterTimeout = 30
    
// 	let text = el.innerHTML
// 	let i = 1

// 	let print__fn = function(){

// 			if( i <= text.length ){
// 				el.innerHTML = text.substr( 0, i );
// 				setTimeout( arguments.callee, letterTimeout );
// 			}

// 			i++;
// 		}

// 	print__fn() // init
// };

// // init
// let el = document.getElementById( 'typing' )
// printText( el );