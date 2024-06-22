import React, { useState } from 'react';
import './Misc.css';

function Misc() {
  const tiers = [
    {
      label: 'Must Take', color: '#FF6347', courses: [
        { code: 'DSC 80', title: 'Practice and Application of Data Science', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'DSC 140A', title: 'Probabilistic Modeling and Machine Learning', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'DSC 140B', title: 'Representation Learning ', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 }
      ]
    },
    {
      label: 'Highly Recommend', color: '#FFA500', courses: [
        { code: 'DSC 10', title: 'Principles of Data Science', reason: 'This class introduces almost every concept the data science curriculum has to offer. The content is super compact, but it is definitely worth trying if you are interested in this field.', interestingScore: 9, usefulScore: 7, difficultyScore: 7 },
        { code: 'DSC 30', title: 'Principles of Data Science', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'CSE 12', title: 'Basic Data Structures and Object-Oriented Design', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'CSE 20', title: 'Discrete Mathematics', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'CSE 100', title: 'Advanced Data Structures', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'ECE 35', title: 'Introduction to Analog Design', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 }
      ]
    },
    {
      label: 'Great', color: '#FFFF00', courses: [
        { code: 'DSC 20', title: 'Programming and Data Structures for Data Science', reason: 'A pure Python coding class. It is probably the most helpful lower-division class that prepares you for DSC80 and the upper divisions.', interestingScore: 7, usefulScore: 10, difficultyScore: 6 },
        { code: 'DSC 106', title: 'Introduction to Data Visualization', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'MATH 18', title: 'Linear Algebra', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'CSE 15L', title: 'Software Tools and Techniques Laboratory', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'ECE 65', title: 'Components and Circuits Laboratory', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 }
      ]
    },
    {
      label: 'Solid', color: '#ADFF2F', courses: [
        { code: 'DSC 100', title: 'Introduction to Data Management', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'MATH 183', title: 'Statistical Methods', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'CSE 8B', title: 'Introduction to Programming and Computational Problem-Solving II', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'CSE 30', title: 'Computer Organization and Systems Programming', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 }
      ]
    },
    {
      label: 'Average', color: '#00BFFF', courses: [
        { code: 'DSC 40B', title: 'Theoretical Foundations of Data Science II', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'MATH 20C', title: 'Calculus and Analytic Geometry for Science and Engineering', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'MATH 20D', title: 'Introduction to Differential Equations', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 },
        { code: 'CSE 21', title: 'Mathematics for Algorithms and Systems', reason: 'todo', interestingScore: -1, usefulScore: -1, difficultyScore: -1 }
      ]
    },
    {
      label: 'Meh', color: '#9800AD', courses: [
        { code: 'COGS 9', title: 'Introduction to Data Science', reason: 'Not very challenging, but still useful', interestingScore: 5, usefulScore: 6, difficultyScore: 3 }
      ]
    }
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="misc-container">
      <h1>To my fellow Tritons 🔱</h1>
      <h2>Course Recommendations</h2>
      <div className="tier-list-container">
        <div className="tier-list">
          {tiers.map((tier, index) => (
            <div key={index} className="tier-row">
              <div className="tier-label" style={{ backgroundColor: tier.color }}>{tier.label}</div>
              <div className="tier-content">
                {tier.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="course"
                    onClick={() => handleCourseClick(course)}
                  >
                    {course.code}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="course-details">
          {selectedCourse ? (
            <>
              <h2>{selectedCourse.code}: {selectedCourse.title}</h2>
              <p><strong>Reason:</strong> {selectedCourse.reason}</p>
              <p><strong>Interesting Score:</strong> {selectedCourse.interestingScore}</p>
              <p><strong>Useful Score:</strong> {selectedCourse.usefulScore}</p>
              <p><strong>Difficulty Score:</strong> {selectedCourse.difficultyScore}</p>
            </>
          ) : (
            <p>Feel free to click on the classes to see their review.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Misc;
