body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 20px;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
}

#modeSelection button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
}

#game {
  margin-top: 30px;
}

/* Styl pro dropdown */
.dropdown {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 220px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.question {
  font-size: 20px;
  margin-top: 20px;
}

#answer {
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin-top: 10px;
}

#feedback {
  font-size: 18px;
  margin-top: 20px;
  height: 24px; /* pro udržení místa */
}

.correct {
  color: green;
}

.incorrect {
  color: red;
}

#results {
  margin-top: 30px;
  font-size: 18px;
}
