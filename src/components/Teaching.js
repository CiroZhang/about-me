import React from 'react';
import './Teaching.css';

function Teaching() {
  const teachingData = [
    {
      code: 'DSC 10',
      title: 'Principles of Data Science',
      professors: 'Prof. Suraj Rampure and Prof. Janine Tiefenbruck and Prof. Rod Albuyeh',
      role: 'Tutor',
      dates: [
        { date: 'FA23', url: 'https://dsc-courses.github.io/dsc10-2023-fa/' },
        { date: 'WI24', url: 'https://dsc-courses.github.io/dsc10-2024-wi/' },
        { date: 'SP24', url: 'https://dsc-courses.github.io/dsc10-2024-sp/' }
      ],
      description: 'This first course in data science introduces students to data exploration, statistical inference, and prediction. It introduces the Python programming language as a tool for tabular data manipulation, visualization, and simulation. Through homework assignments and projects, students are given an opportunity to develop their analytical skills while working with real-world datasets from a variety of domains.',
      imageUrl: 'https://www.ikea.com/ca/en/images/products/kramig-soft-toy-white-black__0877504_pe611253_s5.jpg?f=s',
      link: 'https://dsc10.com/' // Update this link as needed
    }
  ];

  return (
    <div className="teaching-container">
      <h1>Teaching</h1>
      {teachingData.map((course, index) => (
        <div key={index} className="teaching-course">
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            <img src={course.imageUrl} alt={`${course.title} image`} className="teaching-course-image" />
          </a>
          <div className="teaching-course-details">
            <h2>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                {course.code}: {course.title}
              </a>
            </h2>
            <p>{course.professors}</p>
            <p>
              <strong>{course.role}: </strong> 
              {course.dates.map((dateLink, idx) => (
                <span key={idx}>
                  <i><a href={dateLink.url} target="_blank" rel="noopener noreferrer">{dateLink.date}</a></i>
                  {idx < course.dates.length - 1 && ', '}
                </span>
              ))}
            </p>
            <p>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Teaching;
