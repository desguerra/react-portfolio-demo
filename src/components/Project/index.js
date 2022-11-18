import React, { useState } from 'react';


function Project() {
  const [projects] = useState([
    {
      title: 'personal portfolio',
      deployedURL: 'https://desguerra.github.io/',
      githubURL: 'https://github.com/desguerra/desguerra.github.io',
      img: '0'
    },
    {
      title: 'the tech blog',
      deployedURL: 'https://afternoon-chamber-17636.herokuapp.com/',
      githubURL: 'https://github.com/desguerra/tech-blog',
      img: '1'
    },
    {
      title: 'star sign lovers',
      deployedURL: 'https://stark-hollows-94979.herokuapp.com/',
      githubURL: 'https://github.com/desguerra/star-sign-lovers',
      img: '2'
    },
    {
      title: 'weeb army',
      deployedURL: 'https://desguerra.github.io/weeb-army/',
      githubURL: 'https://github.com/desguerra/weeb-army',
      img: '3'
    },
    {
      title: 'weather dashboard',
      deployedURL: 'https://desguerra.github.io/weather-dashboard/',
      githubURL: 'https://github.com/desguerra/weather-dashboard',
      img: '4'
    },
    {
      title: 'Run Buddy',
      deployedURL: 'https://desguerra.github.io/run-buddy/',
      githubURL: 'https://github.com/desguerra/run-buddy',
      img: '5'
    }
  ]);

  return (
    <section className='container-fluid'>
      <div className='py-2 row'>
        {projects.map((x) => (
          <div className='col-lg-6 col-sm-12 py-3 text-center'>
            <div>
              <img
                src={require(`../../assets/thumbnails/${x.img}.PNG`).default}
                alt={x.name}
                width='350px'
                key={x.name}
              />
            </div>
            <h4>
              <a href={x.deployedURL} target='_blank' rel='noreferrer'>
                {x.title}
              </a>
            </h4>
            <a href={x.githubURL} target='_blank' rel='noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;