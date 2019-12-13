/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, 
in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    var result = [];
    var char = '';
    var word = '';

    if ( !url.includes('?') ) { return undefined};

    index = url.indexOf('?');

    for (var i = index + 1; i < url.length; i++) {
        if (url[i] === '='){
            result.push(char);
            char = '';

            for (var j = i + 1; j < url.length; j++) {
                if(url[j] === '&') {
                    result.push(word);
                    word = '';
                    i = j+1;
                    break;
                }
                word += url[j];
            }
        }
        char += url[i];
    }

    return result;
}

// [ [ "a", "hello" ], [ "b", "99" ] ]
console.log( parseQueryString("http://example.com?a=hello&b=99") );

//[ [ "msg", "hello world" ] ]
console.log( parseQueryString("http://example.com?msg=hello%20world") );

//undefined
console.log( parseQueryString("http://example.com") );