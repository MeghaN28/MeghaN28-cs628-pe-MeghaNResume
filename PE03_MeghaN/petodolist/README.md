Input
The ToDo List App contains a text field where users can submit their task descriptions. Users can enter their tasks into the input area before clicking Add Task to create new entries in the list. The application retrieves any saved tasks from localStorage before it starts to maintain data persistence across sessions.

Process
The user inputted task data gets stored in a state variable with the help of the useState hook after they click Add Task. The task gets added to the todos collection before the application updates its current state. The useEffect hook maintains a mechanism that stores tasks in localStorage whenever the list undergoes any modification. The input field stays focused after adding a task through the useRef management system. After clicking "Delete" the list removes the task and the application updates its state.

Output
The application automatically displays the todo list through the .map() function. The application shows each task as a styled item which contains a Delete button. Both the user interface and localStorage remove the task when a user deletes it. The application shows a message to users when their list contains no tasks.

Technology Used
CSS- TailWind CSS
JavaScript
React