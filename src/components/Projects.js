// src/components/Projects.js

import React from 'react';
import './Projects.css';

function Projects() {
  const researchData = [
    {
      title: 'Histological subtype is associated with PD-L1 expression and CD8+ T-cell infiltrates in triple-negative breast carcinoma',
      contributors: ['Taylor Salisbury', 'Alisa Abozina', 'Ciro Zhang', 'Elaine Mao', 'Norbert Banyi', 'Joyce Leo', 'Diana Ionescu', 'Chen Zhou', ' Chen Zhou'],
      publicationLink: 'https://pubmed.ncbi.nlm.nih.gov/35091156/',
      description: "Assessment of programmed death-ligand 1 (PD-L1) expression and CD8+ lymphocyte infiltrates in triple-negative breast carcinoma (TNBC) can provide valuable prognostic and predictive information. Knowledge of clinical and pathological factors that predict the status of these two markers is needed to better select patients likely to respond to immunotherapy. We aim to assess the association between histological subtypes of TNBC and tumor microenvironment type, defined here as each tumor's PD-L1 status and the percentage of CD8+ cells in its tumor-associated lymphocyte population. Tissue microarrays consisting of 72 TNBC cases (28 conventional invasive ductal carcinomas (IDCs), 21 basal-like IDCs, 18 apocrine carcinomas, and five metaplastic carcinomas) were evaluated for PD-L1 expression using the SP142 and 22C3 immunohistochemical (IHC) assays. The percentages of CD8+ and CD4+ intra-tumoral stromal lymphocytes in each case were analyzed using QuPath (open-source software platform) on CD8 and CD4 IHC-stained digital slides of the TMAs. Tumor-infiltrating lymphocytes (TILs) were also assessed on representative H&E-stained whole-tissue sections and compared to CD8+ and CD4+ lymphocyte percentages, and to the CD4/CD8 ratio of intra-tumoral lymphocytes for each case. Cases were then separated into four tumor microenvironment groups (PD-L1+/CD8+, PD-L1+/CD8-, PD-L1-/CD8+, and PD-L1-/CD8-). Basal-like IDCs were most often PD-L1-/CD8- (71.4%/61.9% of cases with SP142/22C3, respectively), while conventional IDCs were more distributed among PD-L1+ and PD-L1- microenvironments (35.7% PD-L1+/CD8+ and 42.9% PD-L1-/CD8- with the 22C3 assay). Apocrine carcinomas tended to be PD-L1-/CD8- (83.3% of cases with both SP142 and 22C3 antibodies). Metaplastic carcinomas were PD-L1-/CD8- in 60% of cases with both 22C3 and SP142. A CD8+ lymphocyte percentage ≥5% strongly predicted PD-L1 positivity (positive predictive value using the 22C3 assay: 0.75). Our data suggest that some histological subtypes of TNBC are predictive of PD-L1 status and CD8+ T-cell infiltrate levels.",
      imageUrl: 'https://ars.els-cdn.com/content/image/1-s2.0-S109291342200003X-gr3_lrg.jpg'
    }
  ];

  const projectData = [
    {
      videoId: '_-Iog7sBY0Y',
      title: 'Wikipedia Graph Visualization',
      description: "In this interactive web app, you can explore the vast amount of knowledge contained within Wikipedia, building a web of knowledge connected by hyperlinks. Explore your favorite topics and see how all knowledge is connected.",
      githubLink: 'https://github.com/TQZhang04/wikipedia-game-bfs',
      contributors: ['Ciro Zhang', 'Tianqi Zhang'],
      link: 'https://tqzhang04.github.io/wikipedia-game-bfs/',
      hasLink: true
    },
    {
      videoId: 'v9uu0OD_uUM',
      title: 'OneTouch',
      description: 'Android app that allows users to create custom short cuts. Send a custom email or open a particular file at the press of a button.',
      githubLink: 'https://github.com/CiroZhang/WidgetApp',
      contributors: ['Ciro Zhang', 'Oscar Yang', 'Jason Liang', "Sophie Price", "Jeffrey He", "Peter Lu"],
      link: '',
      hasLink: false
    },
    {
      videoId: 'onHAY8Da6oI',
      title: 'Slice',
      description: 'Bill splitting app designed to better and more efficiently split out bills. Utilizes computer vision to scan pictures of receipt and build in interface that allows for easy bill spliting',
      githubLink: 'https://github.com/SunbathingFish/billSplit_app',
      contributors: ['Ciro Zhang', 'Oscar Yang', 'Jason Liang', "Sophie Price", "Jeffrey He"],
      link: '',
      hasLink: false
    },
  ];

  return (
    <div className="projects-container">
      <h1>Research</h1>
      {researchData.map((research, index) => (
        <div key={index} className="research">
          <div className="research-image">
            <a href={research.publicationLink} target="_blank" rel="noopener noreferrer">
              <img src={research.imageUrl} alt={research.title} />
            </a>
          </div>
          <div className="research-details">
            <h2>
              <a href={research.publicationLink} target="_blank" rel="noopener noreferrer">
                {research.title}
              </a>
            </h2>
            <p className="contributors">
               {research.contributors.join(', ')}
            </p>
            <p>{research.description}</p>
          </div>
        </div>
      ))}

      <h1>Projects</h1>
      {projectData.map((project, index) => (
        <div key={index} className="project">
          <div className="video">
            <iframe
              width="400"
              height="250"
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={`YouTube video player - ${project.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> 
          <div className="project-details">
            <h2>
              {project.hasLink ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h2>
            <p className="contributors">
               {project.contributors.join(', ')}
            </p>
            <p >{project.description}</p>
            <a className='github' href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
