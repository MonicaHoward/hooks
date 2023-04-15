// First we import `useState` with React so that we can take advantage of the hook
import React, { useState } from 'react';

const Greeting = () => {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  const [greeting, setGreeting] = useState('Welcome! React state is awesome!');

 setGreeting("TODAY IS MONDAY")

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Greeting from state:
      </div>
      <div className="card-body">
        <p className="card-text" style={{ fontSize: '50px' }}>
          {greeting}
        </p>
      </div>
    </div>
  );
}

export default Greeting;