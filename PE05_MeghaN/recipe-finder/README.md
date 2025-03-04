# Input

The input is received through a web form or API requests. The user is able to provide a recipe with a name, ingredients, and how to prepare. When editing an existing recipe, the recipe ID is also sent in the request so that the corresponding recipe data can be accessed. Input validation is performed to ensure all fields are filled out before proceeding.

# Process

The application processes the input by first validating the fields. If the input is valid, it adds a new recipe or updates a current one. When adding new recipes, it inserts the data into the MongoDB database, and for current recipes, it performs an update based on the recipe's unique ID. The backend utilizes Express to handle HTTP requests, Mongoose to handle database interactions, and Axios to facilitate frontend-backend communication.

# Output

The output is either a success or error message on submission of the form for the recipe. When update or creation is successful, the user is redirected to the homepage with the new recipe list. On occurrence of an error, an error message is given to the user along with the error description (e.g., fields missing or server failure).
