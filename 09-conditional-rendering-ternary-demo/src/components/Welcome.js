import React, {useState} from 'react';

// Here we destructure our props into their own distinct variables
const Welcome = ({ loggedIn, setLoggedIn }) => {

  const [name, setName ] = useState('Monica')

// loggedIn = true;

console.log("??", loggedIn)


  let checkName = () => {

    if (name == "Monika"){
     console.log("Cool spelling")
    }
    else {
      console.log("Thats very traditional")
    }

  }

  name == "Monika" ? console.log("Cool spelling") : console.log("Thats very traditional");

  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}

      {/* 
      check the statement for truth ? if true run this code block : if first statement is false run this code block
      */}
      <main>
        {checkName}
      </main>

      {loggedIn ? (
        <div>
          <span role="img" aria-label="tada">
            🎉
          </span>
          <h3>You are signed in!</h3>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log out
          </button>
        </div>
      ) : (
        // If we are logged out, render this:
        <div>
          <span role="img" aria-label="stopsign">
            🛑
          </span>
          <h3>You are currently logged out</h3>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
}

export default Welcome