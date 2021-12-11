# Django Server

The backend works by using Django, Django Rest Framework, and DRF SimpleJWT. 

For this demonstration, SimpleJWT utilizes the refresh and access token methodology. The client sends its credentials to the server once and receives an access and refresh token. Everytime you want to do authentication on a view, the client will send the access token; however, that access token expires (in our case, in 5 minutes for security reasons). Once it expires, instead of resending the credentials, we use the refresh token to get a new access token.

If the refresh token expires (after 1 day for security reasons), the client needs to send the username and password again.

### Running the server

1. Create a virtual environment and install the packages: `virtualenv venv && source venv/bin/activate && pip install  -r requirements.txt`.
    - Again, make sure when you do this, you are inside the server directory on your terminal/cmd.
    - On Windows, you should do `venv\Scripts\activate` instead of `source venv/bin/activate`
2. Run the server: `python manage.py migrate && python manage.py runserver localhost:8000`

A default user with the username `test` and password `test` have been created.


###

All the api's with respect to the todo is working on tested. The implementation of GET /api/todo/ is done on the 
react app as there was less time constraint.
