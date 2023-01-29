import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Tutor from './components/Tutor';
import ParentTutor from './components/ParentTutor';

function App() {
  return (
    <div className="App">
      {/* <Tutor name= 'Sylvester' fullName='Sylvester Ouma' department='Software Engineering' knowledgeContribution='Data as Objects' button = '<button>Hide</button>'>
        </Tutor>
      <Tutor name= 'Edward'  fullName='Edward Bwoga' department='Security Engineering' knowledgeContribution='XML to XML Strings' button = '<button>Hide</button>'>
        </Tutor>
      <Tutor name= 'Maurice'  fullName='Maurice Otieno' department='Database Administration' knowledgeContribution=' Going Bitwise Way' button = '<button>Hide</button>'>
      </Tutor> */}

      <ParentTutor />
    </div>
  );
}

export default App;
