import React from "react";
import LevelOne from "./LevelOne";
import clock from "../../../../Images/icons/clock.svg";
import graph from "../../../../Images/icons/graph.svg";
import cour from "../../../../Images/icons/courseiCon.png";

const Level = () => {
  return (
    <div>
      <LevelOne
        clock={clock}
        cour={cour}
        graph={graph}
        title=" Course: Computer Programming Fundamental"
        details=" Students will be introduced to basic Logic, understanding of
                coding, fundamentals of programming language. Bit by bit they
                will be able to do game developments with the help of very easy
                graphical programming."
        level="Level-1"
        time="24 Hours"
        clockText=" 12 Lesson, 8 Projects, 4 Tasks"
        graphText=" Skills You Get: Coding, Logic, Games Development, Scratch,
                  Programming Basics"
        courText=" Age 6 and above, also who are interested"
      ></LevelOne>
      <hr />
      <LevelOne
        clock={clock}
        cour={cour}
        graph={graph}
        title=" Course: Mobile Application & Website Development"
        details="This level is designed to teach students how to make their own Applications and Website designs and portfolios."
        level="Level-2"
        time="24 Hours"
        clockText=" 12 Lesson, 8 Projects, 4 Tasks"
        graphText=" Skills You Get: HTML, CSS, Mobile Application, Website development."
        courText=" Age 12 and above and also students who have prerequisites of Level 1"
      ></LevelOne>
      <hr />
      <LevelOne
        clock={clock}
        cour={cour}
        graph={graph}
        title="
Course: Robotics & Embedded System"
        details="Level 3 is designed to introduce Robotics and Embedded systems. As exciting as robotics is, it will be more exciting to learn how robotics work. Introduction to electronics, hardware are designed to be taught in this course."
        level="Level-3"
        time="24 Hours"
        clockText=" 
12 Lesson, 6 Projects, 4 Tasks"
        graphText=" Skills You Get: Robotics, Arduino, C programming, Electronics basics."
        courText="
Prerequisites can be Level 1 and Level 2 or anyone who wants to start from this level is interested in Robotics."
      ></LevelOne>
      <hr />
      <LevelOne
        clock={clock}
        cour={cour}
        graph={graph}
        title="
Course: Python Programming & Data Science"
        details="We will teach introduction to Python and how to maneuver it with data science. Python is one of the most versatile and popular languages, and highl;y skilled python programmers are in huge demand. Students learning python can use it to build ideas on data science and applications."
        level="Level-4"
        time="24 Hours"
        clockText=" 
12 Lesson, 4 Projects, 4 Tasks"
        graphText=" Skills You Get: Python, Games Development, Data Science Basic."
        courText="
Anyone who wants to start from level 4, can start."
      ></LevelOne>
      <hr />
      <LevelOne
        clock={clock}
        cour={cour}
        graph={graph}
        title="
Course: IoT & Data Science"
        details="Everyone has heard of the Internet of Things that makes everything smart, easy and technically drives all with the help of microchips and the connection with the internet. Students will learn about IoT and how to connect that with Data Science."
        level="Level-5"
        time="24 Hours"
        clockText=" 
12 Lesson, 10 Projects, 4 Tasks"
        graphText=" Skills You Get: IoT, Smart system design, Data Science."
        courText="
Anyone with knowledge on the prior level."
      ></LevelOne>
      <hr />
      <LevelOne
        clock={clock}
        cour={cour}
        graph={graph}
        title="
Course: AI & Robotics Vision"
        details="Students will be designing their own robotics with the help of AI. Our educator will guide them through the basics to the very end."
        level="Level-6"
        time="24 Hours"
        clockText=" 
12 Lesson, 2 Projects, 4 Tasks"
        graphText=" Skills You Get: AI, Robotics, Image processing"
        courText="
Anyone with knowledge on the prior level."
      ></LevelOne>
     
    </div>
  );
};

export default Level;
