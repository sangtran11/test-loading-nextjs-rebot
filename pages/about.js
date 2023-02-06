import React, { useEffect, useState } from "react";

const About = () => {
  const [poke, setPoke] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      console.log("data", data);
      setPoke(data.message);
    })
  }, [])
  return (
    <div>About</div>
  )
}

export default About;
