### Introduction

This repository is an example of using React on the front end comminicating with Django, Django Rest Framework and DRF SimpleJWT applications.

---
### Usage

#### Backend (Django) Instructions.


1. To run the server, create a virtual environment `virtualenv venv && source venv/bin/activate`, install packages `pip install -r requirements.txt` -- the requirements.txt file is inside the server subdirectory -- and do `python manage.py migrate && python manage.py runserver`.
    - Again, make sure when you do this, you are inside the server directory on your terminal/cmd.
    - On Windows, you should do `venv\Scripts\activate` instead of `source venv/bin/activate`
2. If you're writing for an example repository, please create


#### Frontend (jwt-react) React instructions.

1. `cd jwt-react` to get your terminal/server into the frontend (react) folder.

2. `npm install` to install all of the dependencies for the front end application.

3. `npm start` and you should be good to go, ensure that your backend is running on port `http://localhost:8000`, if you run it on another port/ip please change the `BASE_URL` in `jwt-react/src/api/auth.js`

4. Use `npm test` if you'd like to run the test which tests the api/ folder currently.
