react-timepicker
===============================

This project is based off https://github.com/jonthornton/jquery-timepicker for React.js. This is still a WIP.

Usage
===============================

Currently building out the module for use.

Contributions
===============================
If you have any additions you want to add, PR them up. There is still many things to pass into this timepicker.

Options
===============================

- **appendTo**
Override where the dropdown is appended.
Takes either a `string` to use as a selector, a `function` that gets passed the clicked input element as argument or a jquery `object` to use directly.
*default: "body"*

- **className**
A class name to apply to the HTML element that contains the timepicker dropdown.
*default: null*

- **closeOnWindowScroll**
Close the timepicker when the window is scrolled. (Replicates ```<select>``` behavior.)
*default: false*

- **disableTimeRanges**
Disable selection of certain time ranges. Input is an array of time pairs, like ```[['3:00am', '4:30am'], ['5:00pm', '8:00pm']]``. The start of the interval will be disabled but the end won't.
*default: []*

- **disableTextInput**
Disable typing in the timepicker input box; force users to select from list. [More information here.](https://github.com/jonthornton/jquery-timepicker/issues/425#issuecomment-133262458)
*default: false*

- **disableTouchKeyboard**
Disable the onscreen keyboard for touch devices. There can be instances where Firefox or Chrome have touch events enabled (such as on Surface tablets but not actually be a touch device. In this case `disableTouchKeyboard` will prevent the timepicker input field from being focused. [More information here.](https://github.com/jonthornton/jquery-timepicker/issues/413)
*default: false*

- **durationTime**
The time against which ```showDuration``` will compute relative times. If this is a function, its result will be used.
*default: minTime*

- **forceRoundTime**
Force update the time to ```step``` settings as soon as it loses focus.
*default: false*

- **lang**
Language constants used in the timepicker. Can override the defaults by passing an object with one or more of the following properties: decimal, mins, hr, hrs.
*default:* ```{
  am: 'am',
  pm: 'pm',
  AM: 'AM',
  PM: 'PM',
  decimal: '.',
  mins: 'mins',
  hr: 'hr',
  hrs: 'hrs'
}```

- **maxTime**
The time that should appear last in the dropdown list. Can be used to limit the range of time options.
*default: 24 hours after minTime*

- **minTime**
The time that should appear first in the dropdown list.
*default: 12:00am*

- **noneOption**
Adds one or more custom options to the top of the dropdown. Can accept several different value types:
Boolean (```true```): Adds a "None" option that results in an empty input value
String: Adds an option with a custom label that results in an empty input value
Object: Similar to string, but allows customizing the element's class name and the resulting input value. Can contain ```label```, ```value```, and ```className``` properties. ```value``` must be a string type.
Array: An array of strings or objects to add multiple non-time options
*default: false*

- **orientation**
By default the timepicker dropdown will be aligned to the bottom right of the input element, or aligned to the top left if there isn't enough room below the input. Force alignment with `l` (left), `r` (right), `t` (top), and `b` (bottom). Examples: `tl`, `rb`.
*default: 'l'*

- **roundingFunction**
Function used to compute rounded times. The function will receive time in seconds and a settings object as arguments. The function should handle a null value for seconds.
*default: round to nearest step*

- **scrollDefault**
If no time value is selected, set the dropdown scroll position to show the time provided, e.g. "09:00". A time string, Date object, or integer (seconds past midnight) is acceptible, as well as the string `'now'`.
*default: null*

- **selectOnBlur**
Update the input with the currently highlighted time value when the timepicker loses focus.
*default: false*

- **show2400**
Show "24:00" as an option when using 24-hour time format.
*default: false*

- **showDuration**
Shows the relative time for each item in the dropdown. ```minTime``` or ```durationTime``` must be set.
*default: false*

- **showOn**
Display a timepicker dropdown when the input fires a particular event. Set to null or an empty array to disable automatic display. Setting should be an array of strings.
*default: ['focus']*

- **showOnFocus**
DEPRECATED: Display a timepicker dropdown when the input gains focus.
*default: true*

- **step**
The amount of time, in minutes, between each item in the dropdown. Alternately, you can specify a function to generate steps dynamically. The function will receive a count integer (0, 1, 2...) and is expected to return a step integer.
*default: 30*

- **stopScrollPropagation**
When scrolling on the edge of the picker, it prevent parent containers (<body>) to scroll.
*default: false*

- **timeFormat**
How times should be displayed in the list and input element. Uses [PHP's date() formatting syntax](http://php.net/manual/en/function.date.php). Characters can be escaped with a preceeding double slash (e.g. `H\\hi`). Alternatively, you can specify a function instead of a string, to use completely custom time formatting. In this case, the format function receives a Date object and is expected to return a formatted time as a string.
*default: 'g:ia'*

- **typeaheadHighlight**
Highlight the nearest corresponding time option as a value is typed into the form input.
*default: true*

- **useSelect**
Convert the input to an HTML `<SELECT>` control. This is ideal for small screen devices, or if you want to prevent the user from entering arbitrary values. This option is not compatible with the following options: ```appendTo```, ```closeOnWindowScroll```, ```disableTouchKeyboard```, ```forceRoundTime```, ```scrollDefault```, ```selectOnBlur```, ```typeAheadHighlight```.
*default: false*

Contributions
===============================
There is still plenty of features missing compared to the original date time picker, hence contributions would be highly appreciated.
