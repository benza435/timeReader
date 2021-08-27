# timeReader()

As is, I broke TDD sequence, did some experimenting and ultimately created some spaghetti. Could we call that 'spiking'?  
The black and white specification here is to produce something that can read the time in a human-like way.

## examples:

`tellTime(09,05) returns "five past nine"`  
`tellTime(10,45) returns "quarter to eleven"`

## ideas:

With some text-to-speech software and a nifty UI, this could be good for teaching kids to tell the time.

## process:

Input time is two params: (hours, minutes). Will change this when I change back to OOP.  
The process of changing numbers to words is handled by [to-words](https://www.npmjs.com/package/to-words) from npm.

Half wrote a project specification and then wrote the code by accident!  
Works OK now. Next is to implement a time picker and text to speech!

## next:

Time picker ideas ?  
Text-to-speech ideas ?
