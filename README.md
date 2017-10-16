# underline-element 

Underlines an element escaping chosen characters. 

While CSS attribute `text-decoration-skip` is still an experimental feature, this script will do the work.

## Usage

Just add an `underline-element.js` in your html document before your custom script:

```
<body>

    <script src="underline-element.js"></script>
    <script src="script.js"></script>
</body>
```

 and put `underlineAnElement()` function into your custom script:

```
function underlineAnElement(domEntity, domEntityValue, simbolsToEscape) {

} 
```

You can fill three parameters:

`domEntity <String>` // values: `'tag'`, `'class'`, `'id'`

`domEntityValue <String>` // DOM Element (`'h1'`, `'span'`, `'p'`)

`simbolsToEscape <Array>` of strings // `[' ', 'g', 'y']`

//If you break a line with `<br/>`, then it can be included into an array, for example: 

### html
```
<span id="broken-line">This line was broken<br/> on two!</span>
``` 
### js
```
window.onload = function () {
    underlineAnElement('id', 'span', ['<br/>', 'g', 'y']);
};
```

create a `.border` class in your CSS file. For underlining you can use as a  `text-decoration` or as a `border` CSS attributes:

### text-decoration

```
.bordered {
    text-decoration: underline green;
}
```

### border

You can choose a width of the line.

```
.bordered {
    border: 3px solid green;
}
```