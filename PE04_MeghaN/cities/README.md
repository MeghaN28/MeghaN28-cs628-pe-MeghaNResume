# Input
The system receives information from users through two principal methods. Users can access the Add City route to enter three essential details about a new city including its name and country along with population counts. Users can choose a city from the main page list by clicking its name. The application begins its processing flow after users trigger these interactions.

# Process
User input data submitted through the Add City page gets processed by the AddCity component before it updates the city list and redirects users to the home page. A user can access specific city details by selecting a city name from the city list which the CitiesList component manages to route to its corresponding URL page. The CityDetails component obtains the city name from the URL before it searches through data and shows the matching details to the user. The application achieves smooth navigation and automatic content rendering through React Router.

# Output
Users receive two main outputs from this application. The main page shows dynamically updating city names from a city list which expands when new cities join the database. The selection of a city name through a click action leads to a details page showing its name together with country information and population statistics. The application updates its URL while clearing previously selected city choices to maintain an uncluttered navigation system.
