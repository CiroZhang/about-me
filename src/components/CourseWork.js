// src/components/CourseWork.js

import React, { useState } from 'react';
import './CourseWork.css';

function CourseWork() {
  const [activeCourses, setActiveCourses] = useState({});

  const courseData = {
    'Machine Learning': [
      {
        title: 'Probabilistic Modeling and ML',
        description: 'The course covers learning and using probabilistic models for knowledge representation and decision-making. Topics covered include graphical models, temporal models, and online learning, as well as applications to natural language processing, adversarial learning, computational biology, and robotics.',
        code: 'DSC 140A'
      },
      {
        title: 'Representation Learning',
        description: 'This course is an introduction to machine learning which explores techniques for learning suitable representations from data. Topics include clustering, dimensionality reduction, manifold learning, principal component analysis, spectral embeddings, multilayer perceptrons, autoencoders, convolutional and recurrent neural networks, and other aspects of deep learning.',
        code: 'DSC 140B'
      },
      {
        title: 'Recommender Systems and Web Mining',
        description: 'Current methods for data mining and predictive analytics. Emphasis is on studying real-world data sets, building working systems, and putting current ideas from machine learning research into practice.',
        code: 'CSE 158'
      },
      {
        title: 'Statistical Natural Language Processing',
        description: 'Natural language processing (NLP) is a field of AI which aims to equip computers with the ability to intelligently process natural (human) language. This course will explore statistical techniques for the automatic analysis of natural language data. Specific topics covered include probabilistic language models, which define probability distributions over text passages; text classification; sequence models; parsing sentences into syntactic representations; and machine translation.',
        code: 'CSE 156'
      },
      {
        title: 'Machine Learning for Music and Audio',
        description: 'The course covers topics of Machine Learning dealing with music and audio signals, including basic concepts in digital signal processing, symbolic music / MIDI, audio analysis and feature extraction. Statistical models include Markov, autoregressive, and generative neural networks for representation learning with applications to music and sound generation.',
        code: 'CSE 190'
      }
    ],
    'Computer Science': [
      {
        title: 'Advanced Data Structures',
        description: 'High-performance data structures and supporting algorithms. Use and implementation of data structures like (un)balanced trees, graphs, priority queues, and hash tables. Also, memory management, pointers, recursion. Theoretical and practical performance analysis, both average case and amortized.',
        code: 'CSE 100'
      },
      {
        title: 'Software Engineering',
        description: 'Introduction to software development and engineering methods, including specification, design, implementation, testing, and process. An emphasis on team development, agile methods, and use of tools such as IDE’s, version control, and test harnesses.',
        code: 'CSE 110'
      },
      {
        title: 'Design and Analysis of Algorithms',
        description: 'Design and analysis of efficient algorithms with emphasis of nonnumerical algorithms such as sorting, searching, pattern matching, and graph and network algorithms. Measuring complexity of algorithms, time and storage. NP-complete problems.',
        code: 'CSE 101'
      },
      {
        title: 'Theory of Computability',
        description: 'An introduction to the mathematical theory of computability. Formal languages. Finite automata and regular expressions. Push-down automata and context-free languages. Computable or recursive functions: Turing machines, the halting problem. Undecidability.',
        code: 'CSE 105'
      }
    ],

    'Data Science': [
      {
        title: 'Data Management',
        description: 'This course is an introduction to storage and management of large-scale data using classical relational (SQL) systems, with an eye toward applications in data science. The course covers topics including the SQL data model and query language, relational data modeling and schema design, elements of cost-based query optimizations, relational data base architecture, and database-backed applications.',
        code: 'DSC 100'
      },
      {
        title: 'Systems for Scalable Analytics',
        description: 'This course introduces the principles of computing systems and infrastructure for scaling analytics to large datasets. Topics include memory hierarchy, distributed systems, model selection, heterogeneous datasets, and deployment at scale.',
        code: 'DSC 102'
      },
      {
        title: 'Data Visualization',
        description: 'Data visualization helps explore and interpret data through interaction. This course introduces the principles, techniques, and algorithms for creating effective visualizations.',
        code: 'DSC 106'
      },
      {
        title: 'Statistical Methods',
        description: 'Introduction to probability. Discrete and continuous random variables–binomial, Poisson and Gaussian distributions. Central limit theorem. Data analysis and inferential statistics: graphical techniques, confidence intervals, hypothesis tests, curve fitting.',
        code: 'MATH 183'
      }
    ],

    'Electrical Circuits': [
      {
        title: 'Components and Circuits Laboratory',
        description: 'Introduction to linear and nonlinear components and circuits. Topics will include two terminal devices, bipolar and field-effect transistors, and large and small signal analysis of diode and transistor circuits.',
        code: 'ECE 65'
      },
      {
        title: 'Circuits and Systems',
        description: 'Steady-state circuit analysis, first and second order systems, Fourier Series and Transforms, time domain analysis, convolution, transient response, Laplace Transform, and filter design.',
        code: 'ECE 45'
      }
    ]
  };

  const toggleDescription = (category, index) => {
    const key = `${category}-${index}`;
    setActiveCourses(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  return (
    <div className="coursework-container">
      <div className="course-content">
        <h1>Course Work</h1>
        {Object.keys(courseData).map((category, index) => (
          <div key={index} className="course-category" id={category.replace(/\s+/g, '-')}>
            <h2>{category}</h2>
            {courseData[category].map((course, idx) => (
              <div key={idx} className={`course ${activeCourses[`${category}-${idx}`] ? 'active' : ''}`}>
                <h3 onClick={() => toggleDescription(category, idx)}>
                  {course.code}: {course.title}
                </h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="sidebar">
        <ul>
          {Object.keys(courseData).map((category, index) => (
            <li key={index}>
              <a href={`#${category.replace(/\s+/g, '-')}`}>{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseWork;
