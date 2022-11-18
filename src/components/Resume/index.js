import React from 'react';
import resume from '../../assets/resume2022.pdf';

function Resume() {
  return (
    <section className='container-fluid'>
      <div className='mx-5 py-2'>
        <h2>resume</h2>

        <div className='p-4'>
          <p>
            Download my <a href={resume} download>resume</a>!
          </p>

          <div>
            <h3>front-end proficiencies</h3>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>responsive web design</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div>
            <h3>back-end proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node JS</li>
              <li>Experss.js</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;