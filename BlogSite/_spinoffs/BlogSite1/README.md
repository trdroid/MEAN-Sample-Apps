### Purpose

Need to understand the internals of how login works with Passport.

When I signin using user1 and refresh the browser, I could see the details of user1 in the request object printed on the server side, so the server knows which user has signed-in.

When I signin using user1 followed by signing in using user2, I could still see the details of user1 in the request object.

I would like to know how and why this is happening and if this would cause any problems.

This lead me to writing a sample to understand how Express behaves with multiple requests.

