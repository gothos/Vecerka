# Prague Vecerkas

Vecerka is small asian shop with various stuff, that are all around Prague and are opened long hours.
App for getting list of Prague vecerkas so that user can view the markers with various vecerkas on the Map. 
User can also add his new vecerka by taking photo of vecerka. After processing the data by server the user will see 
that his vecerka was added on the map as another marker.

### Installing server environment using Dockerfile

```
make firstrun   
```

### Creating and migrating SQLite database

```
make migrate   
```

### Running server

```
make runserver   
```

## Installing frontend dependencies

```
npm install
```

## Starting expo app (in another terminal window)

```
npm start
```
