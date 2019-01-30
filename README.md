# Prague Vecerkas

Vecerka is small asian shop with various stuff, that are all around Prague and are opened long hours.
Prague Vecerkas is the mobile app for retrieving list of Prague vecerkas and displaying them on the Map as markers. 
User can also add his new vecerka by taking photo of vecerka in real life. After processing the data by server the user
will see that his vecerka was added on the map as another marker.

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
