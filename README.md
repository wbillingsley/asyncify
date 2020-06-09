# Asyncify

When students code in learn-to-code environments, early on we want them to be able to write synchronous
code. However, we also want the animation loop of the coding environment to be able to continue, and
to be able to separate their code for security reasons.

This package uses a very small custom Babel.js plugin to turn student (synchronous) code into 
asynchronous code - by turning every function declaration async, and inserting every function call into
an await expression.

This then allows the student code to be put into a separate runtime environment (e.g. a webworker) with the
provided functions that are put into scope being asynchronous rpc calls.

TODO: Extend the plugin also to insert a small asynchronous pulse call inside loops, to make terminating
infinite loops in student code easier.