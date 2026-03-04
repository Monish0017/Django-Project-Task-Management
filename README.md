# Server side - Django side

python3.11 -m venv Django-env

source Django-env/bin/activate

Install the requirements, then run:
pip freeze > requirements.txt

requirements.txt will have all the modules used for this project.


django-admin startproject config .

Project created with the title "config".
The "." means do not create another directory for the project.


python manage.py startapp accounts
python manage.py startapp tasks


Inside settings.py I added the CORS origin, cookies, etc. Additional settings were added for this project.


# To run this project

python manage.py runserver

=

# UI - React Vite

# To run React JS

cd frontend
npm i
npm run dev

This will start the React Vite app at:
http://localhost:5173/


Register your account, then log in.
You can see the credentials in the response inside the Network tab.