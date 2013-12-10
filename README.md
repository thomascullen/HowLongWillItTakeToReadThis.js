#HowLongWillItTakeToReadThis.js
###### A jquery plugin for calcuating how long it will take to read an given article
---
###How To
Include the js file. 
```html
<script src='howlongwillittaketoreadthis.js'></script>
```
By default it searches for an element with a class of `.how-long-to-read` to append the text to. Create a span with this class where you would like the time to read text to appear.
```html
<span class="how-long-to-read"></span>
```
then select the area to calculate time to read
```javascript
$(document).ready(function(){
	$('.container').howLongToRead();
})
```
---
###Options
#####format
You can format the output to include hours.
```javascript
$(document).ready(function(){
	$('.container').howLongToRead({format:'hours'});
})
```
#####label
You can specify the label class to append the text to
```javascript
$(document).ready(function(){
	$('.container').howLongToRead({label:'.text-output'});
})
```
#####wpm
You can specify the average readers words per minute, if not specified it defaults to 200.
```javascript
$(document).ready(function(){
	$('.container').howLongToRead({wpm:200});
})
```
---
###License
Ah sure do what ever.