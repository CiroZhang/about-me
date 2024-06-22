import React, { useState } from 'react';
import './Misc.css';

function Misc() {
  const tiers = [
    {
      label: 'Must Take', color: '#FF6347', courses: [
        { code: 'DSC 80', title: 'Practice and Application of Data Science', reason: 'An epic conclusion to the under-division data science class. Revisit pandas from DSC10, but now, with the knowledge you have gathered so far. Learn web scraping, feature engineering, regex and basic ML models. You will not want to skip this class!', interestingScore: 10, usefulScore: 10, difficultyScore: 9 },
        { code: 'DSC 140A', title: 'Probabilistic Modeling and Machine Learning', reason: 'Building on the foundation laid in DSC40A, this course takes a more in-depth and paced approach to the material. The homework provides an excellent mix of both conceptual content in machine learning and practical coding assignments. The class culminates in an open-ended ML competition where you compete to create the most accurate model. You do not want to miss this class!', interestingScore: 10, usefulScore: 10, difficultyScore: 7 },
        { code: 'DSC 140B', title: 'Representation Learning', reason: 'A continuation of DSC140A, this class follows the same format but with a greater focus on mathematical concepts. Building on the skills you previously acquired, you will learn how to construct your first neural network. I highly recommend this class to anyone who wants to challenge themselves and delve deeper into the theoretical aspects of machine learning.', interestingScore: 10, usefulScore: 10, difficultyScore: 8 }
      ]
    },
    {
      label: 'Highly Recommend', color: '#FFA500', courses: [
        { code: 'DSC 10', title: 'Principles of Data Science', reason: 'This class introduces almost every concept the data science curriculum has to offer. The content is super compact, but it is definitely worth trying if you are interested in this field.', interestingScore: 9, usefulScore: 7, difficultyScore: 7 },
        { code: 'DSC 30', title: 'Principles of Data Science', reason: 'Equivalent to CSE12, but a bit more, learn how to program in Java and all the algorithms/data structure you need to land your first internship. Really interesting class overall.', interestingScore: 8, usefulScore: 10, difficultyScore: 8 },
        { code: 'CSE 12', title: 'Basic Data Structures and Object-Oriented Design', reason: 'Equivalent to DSC30, but a bit more, learn how to program in Java and all the algorithms/data structure you need to land your first internship. Really interesting class overall.', interestingScore: 8, usefulScore: 10, difficultyScore: 7 },
        { code: 'CSE 20', title: 'Discrete Mathematics', reason: 'This is a math class disguised as a CSE class. You will learn concepts such as set theory, logic gates, and mathematical proofs that form the foundation of computer science. It is a crucial theoretical class that will help you succeed in any upper-division CS theory-focused course.', interestingScore: 8, usefulScore: 8, difficultyScore: 7 },
        { code: 'CSE 100', title: 'Advanced Data Structures', reason: 'In this class, you will explore data structures beyond those introduced in CSE12, covering topics from self-balancing trees to text compression. It is a welcome change of pace after the challenges of CSE21 and CSE30.', interestingScore: 10, usefulScore: 8, difficultyScore: 6 },
        { code: 'ECE 35', title: 'Introduction to Analog Design', reason: 'As infamous as this class is, the content becomes manageable if you keep up with the practice assignments and homework. While it might seem overwhelming at first, everything will make sense after that "lightbulb" moment. This is a fundamental class that you need to understand to succeed in any upper-division circuits classes. Good luck!', interestingScore: 7, usefulScore: 8, difficultyScore: 9 }
      ]
    },
    {
      label: 'Great', color: '#FFFF00', courses: [
        { code: 'DSC 20', title: 'Programming and Data Structures for Data Science', reason: 'A pure Python coding class. It is probably the most helpful lower-division class that prepares you for DSC80 and the upper divisions.', interestingScore: 7, usefulScore: 10, difficultyScore: 7 },
        { code: 'DSC 40A', title: 'Theoretical Foundations of Data Science I', reason: 'An introduction to the machine learning algorithms you will learn in DSC140A and DSC140B. If you enjoyed this class and DSC10, congrats you pick the correct major/minor. This class can be best summarized as learning the four key concepts in ML: gradient descent, least squares regression, clustering and Bayes classification. If you have a strong background in MATH20C and MATH18, this class will be a breeze. Good luck!', interestingScore: 9, usefulScore: 7, difficultyScore: 10 },
        { code: 'DSC 106', title: 'Introduction to Data Visualization', reason: 'Learn the fundamental concepts of effective data visualization in this engaging and practical class. You will explore how to use web apps like Svelte to design your first website. Although this class is one of the less time-consuming and easier DSC courses, the content is incredibly useful and interesting. One minor drawback is the format, which can sometimes require you to put in extra effort to fully absorb all the introduced material. However, the knowledge and skills you gain make it well worth the effort.', interestingScore: 7, usefulScore: 10, difficultyScore: 4 },
        { code: 'CSE 15L', title: 'Software Tools and Techniques Laboratory', reason: 'This class has been replaced by CSE 29, so I cant speak much about the new version. However, the original class focused on teaching essential skills needed to succeed in any coding class or project, such as GitHub, Vim, and Bash commands. The class is on the easier side, but you will need to put in extra work to fully grasp the content.', interestingScore: 7, usefulScore: 9, difficultyScore: 5 },
        { code: 'ECE 65', title: 'Components and Circuits Laboratory', reason: 'This course is a continuation of ECE35, where you learn to analyze critical circuit components like BJTs and MOSFETs, which are used in all our computational devices. Although these circuits are typically harder to analyze than those in ECE35, they generally follow a consistent structure. If you made it through ECE35, you can succeed in this course as well.', interestingScore: 7, usefulScore: 7, difficultyScore: 8 }
      ]
    },
    {
      label: 'Solid', color: '#ADFF2F', courses: [
        { code: 'DSC 100', title: 'Introduction to Data Management', reason: 'Congrats on making it to uppervision data science. This class is mainly about SQL and the general framework for developing relational algebra. Although this class is critical and the contents are very interesting, the structure overall feels less organized than the lower division classes. But overall, it is still good.' , interestingScore: 7, usefulScore: 9, difficultyScore:  6},
        { code: 'MATH 183', title: 'Statistical Methods', reason: 'This important statistics class explains many of the concepts taught in the data science curriculum, but this time in a purely mathematical setting. The class itself is not particularly difficult, as it mainly involves simple integrals and plugging in formulas. However, it is very useful for reinforcing and clarifying the statistics concepts you may have missed in DSC80 or DSC10.', interestingScore: 7, usefulScore: 8, difficultyScore: 6 },
        { code: 'CSE 8B', title: 'Introduction to Programming and Computational Problem-Solving II', reason: 'This is a pure Java coding class that helps build the fundamentals you will need to succeed in any CSE classes. It might be a bit overwhelming for students who have never learned to code before. One piece of advice: make good use of office hours—they are extremely helpful.', interestingScore: 7, usefulScore: 8, difficultyScore: 7 },
        { code: 'CSE 30', title: 'Computer Organization and Systems Programming', reason: 'This class has since been restructured with the introduction of CSE29, so I can only speak on the original version. In this course, you will learn the basics of computer systems, including programming in ARM assembly and understanding memory storage on the stack. The curriculum also covers binary expressions and machine code. It is a challenging class, so be prepared to start your programming assignments early.', interestingScore: 8, usefulScore: 7, difficultyScore: 9 },
        { code: 'ECE 45', title: 'Circuits and Systems', reason: 'Building on the knowledge you gained in ECE35, this course focuses on analyzing signals. A strong background in integrals is really helpful, and although MATH20D is not listed as a prerequisite, taking that class beforehand will greatly benefit you. Good luck!', interestingScore: 7, usefulScore: 7, difficultyScore: 10 },
      ]
    },
    {
      label: 'Average', color: '#00BFFF', courses: [
        { code: 'DSC 40B', title: 'Theoretical Foundations of Data Science II', reason: 'Feels like a bit of a small, underwhelming sequel to DSC40B. Technically, it is equivalent to CSE21, but the CSE version is much more in-depth. This class is a continuation of DSC30, where you will learn the proof behind a lot of the algorithms you have learned before, this time in python, and with graph theory sprinkled in the end. Overall, it is a lot easier than DSC40A.', interestingScore: 6, usefulScore: 7, difficultyScore: 5 },
        { code: 'CSE 21', title: 'Mathematics for Algorithms and Systems', reason: 'This class is a challenging continuation of CSE20, where you will apply the proofing methods you learned to prove the algorithms introduced in CSE12. The course is more number-focused, and having a strong background in combinatorics will be very beneficial.', interestingScore: 6, usefulScore: 6, difficultyScore: 10 }
      ]
    },
    {
      label: 'Meh', color: '#9800AD', courses: [
        { code: 'COGS 9', title: 'Introduction to Data Science', reason: 'Not much to say about this class. It introduces various topics in data science rather than delving deeply into them. While the content is interesting, it is not particularly challenging, so you might not learn as much as in other courses. However, it is still worth taking if you have the extra time.', interestingScore: 7, usefulScore: 3, difficultyScore: 3 }
      ]
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="misc-container">
    <h1>My Pets !!!</h1>
    <div className="pets-section">
      <div className="pet">
        <img src={require("../images/lele.png")} alt="Pet 1" className="pet-image"/>
        <div className="pet-description">
          <h2>Hello Lele and XiaoXiao 🐤</h2>
          <p>This is LeLe on the right and XiaoXiao on the left. They are both male cockatiels and are 6 years old. In their free time, they like to scream and attack my parents' plants. Say hi!</p>
        </div>
      </div>
      <div className="pet">
        <img src={require("../images/lucky.png")} alt="Pet 2" className="pet-image"/>
        <div className="pet-description">
          <h2>Hello Dr.Lucky 🐶</h2>
          <p>This is Dr. Lucky, who just got his PhD in Squirrel Studies. Here he is, giving a lecture on the intricacies of tail-chasing at the prestigious Bark University. His students are all ears! </p>
        </div>
      </div>
    </div>





      <h1>For my fellow Tritons 🔱</h1>
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

