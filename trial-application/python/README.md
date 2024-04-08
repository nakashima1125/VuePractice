# An application that performs Kanban-style task management

## How to run

1. activate a python venv
2. install requirements.txt

```
pip install -r requirements.txt
```

3. Detect changes in Django models and record them as migration files

```
python3 manage.py makemigrations
```

4. Apply the migration file to the database and update the database to the latest state

```
python3 manage.py migrate
```

5. Starting the server

```
python3 manage.py runserver
```
