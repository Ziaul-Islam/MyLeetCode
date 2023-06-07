/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let encodeMap = new Map();
let decodeMap = new Map();
let base = 'http://tinyurl.com/';
var encode = function(longUrl) {
   let shortUrl;
   if(!encodeMap.has(longUrl)){
       shortUrl = 'http://tinyurl.com/'+ encodeMap.size + 1;
       encodeMap.set(longUrl, shortUrl);
       decodeMap.set(shortUrl, longUrl);
   }
   return shortUrl || encodeMap.get(longUrl);
};

/**
* Decodes a shortened URL to its original URL.
*
* @param {string} shortUrl
* @return {string}
*/
var decode = function(shortUrl) {
   return decodeMap.get(shortUrl);
};

/**
* Your functions will be called as such:
* decode(encode(url));
*/