import { useState } from 'react'

function App() {

  return (
    <div className='d-flex flex-column gap-2 content'>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <p>
        This is a <strong>paragraph</strong> with <em>emphasis</em>, <a href="#">a link</a>,
        and some <code>inline code</code>.
      </p>

      <ul>
        <li>Unordered list item one</li>
        <li>Unordered list item two</li>
      </ul>

      <ol>
        <li>Ordered list item one</li>
        <li>Ordered list item two</li>
      </ol>

      <div className='d-flex flex-column align-items-start'>
        <button className='btn btn-solid btn-primary'>Primary Solid</button>
        <button className='btn btn-solid btn-secondary'>Secondary Solid </button>
        <button className='btn btn-outline btn-primary'>Primary Outline</button>
        <button className='btn btn-outline btn-secondary'>Secondary Outline</button>
      </div>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
          </tr>
          <tr>
            <td>Cell 3</td>
            <td>Cell 4</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
