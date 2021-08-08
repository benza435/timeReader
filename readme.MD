# timeReader()

As is, I broke TDD sequence, did some experimenting and ultimately created some spaghetti. Could we call that 'spiking'?  
The black and white specification here is to produce something that can read the time in a human-like way.

## examples:

`tellTime(09:05) returns "five past nine"`  
`tellTime(10:45) returns "quarter to eleven"`

## ideas:

With some text-to-speech software and a nifty UI, this could be good for teaching kids to tell the time.

Maybe a rounding option would be good:  
`tellTime(12:12) returns "twelve minutes past twelve"`  
`tellTime(12:12, round) returns "ten past twelve"`

## process:

Input time will be an object like `{'hour':3, 'minute':17}`.  
The process of changing numbers to words will be handled by [to-words](https://www.npmjs.com/package/to-words) from npm.

Half wrote a project specification and then wrote the code by accident!  
Works OK now. Next is to implement a time picker and text to speech!
