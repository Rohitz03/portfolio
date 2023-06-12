import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-black">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full pt-16">
        <div className="pt-8">
          <p className="text-4xl text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20 text-white">
          Hello! I am Rohit Biradar, a passionate Computer Science professional specializing in Cloud Computing, Blockchain, and Web Development. With a strong foundation in these areas, I constantly strive to enhance my skills and stay updated with the latest advancements in technology. I have had the privilege of participating in prestigious programs such as the Smart India Hackathon 2022 and the Martian Internship Program 2022 by Persistent Systems. These experiences have not only broadened my knowledge but also sharpened my problem-solving abilities and honed my communication and teamwork skills.
        </p>

        <br />

        <p className="text-xl text-white">
          My expertise encompasses a range of programming languages including C, C++, and bash scripting, along with proficiency in tools and libraries such as SQL, GitHub, Adobe Illustrator, and After Effects. Throughout my academic journey, I have delved into essential subjects such as Operating Systems, Database Management Systems, Object-Oriented Programming, Cloud Computing, and Data Structures and Algorithms. With a strong commitment to lifelong learning, I continually seek opportunities to expand my horizons and embrace new technologies. I am dedicated to making a meaningful impact in the field of computer science and leveraging my skills to contribute to innovative projects and advancements.
        </p>
      </div>
    </div>
  );
};

export default About;
