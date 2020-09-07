# sample_django_pedometer
Django REST + Angular 10, sample app

## How to run:
The project is split into the frontend project (angular) and the backend project (django). You need to run both for the app to be fully functional


### Angular
The project was made using node v12.13.1 and npm 6.13.7 (See the node and npm requirements for Angular 10 in order to run this project)

On linux terminal:
```
cd /project/directory/angular
npm i
npm run start
```
The app will be running at `localhost:4200/` and sends requests to `localhost:8000`

### Django
On linux terminal:
```
cd /project/directory/django
source venv/bin/activate
cd api
python manage.py migrate
python manage.py runserver
```
The app will be running at `localhost:8000`

## Screens
There are 5 screenshots and a video sample to walk you through the app in the `screens` folder.

