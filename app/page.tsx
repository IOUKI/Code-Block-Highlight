'use client'

import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Home = () => {
  const codeString = `import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Home = () => {
  const codeString = 'const add = (num) => num + 1';
  return (
    <div className="bg-gray-500 grid place-items-center h-screen">
      <SyntaxHighlighter 
        language="javascript" 
        style={atomOneDark}
        customStyle={{
          padding: "25px"
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

export default Home`;

  const [copy, setCopy] = useState(false)

  const copyHandle = () => {
    navigator.clipboard.writeText(codeString)
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 3000);
  }

  return (
    <div className="bg-gray-500 grid place-items-center h-screen">
      <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md">
        <div className="flex justify-between px-4 py-2 text-white text-xs items-center">
          <p className="text-sm">Example code</p>
            {copy ?
              (<button className="py-1 inline-flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Copied
              </button>) :
              (<button 
                className="py-1 inline-flex items-center gap-1"
                onClick={copyHandle}  
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                </svg>
                Copy code
              </button>)
            }
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={atomOneDark}
          customStyle={{
            padding: "25px"
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Home