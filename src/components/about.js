import React from "react";
import img from "../img/about.jpg";
import Style from "./about.module.css";

export const About = () => {

  return (
    <div className="main">
      <div className="img" style={{width  : "60%", height : "790px", display: "float", float: "left"}}>
        <img
          src={img}
          alt=""
          style={{
            width: "100%",
            height: "861px",
          }}
        />
      </div>
      <div className="text" style={{marginLeft : "800px" , padding : "20px" , backgroundColor : "black" , height : "861px"}}>
        <h1 className={Style.heading}>My Hero Academia</h1>
        <p className={Style.para}>
          My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no
          Hīrō Akademia) is a Japanese superhero manga series written and
          illustrated by Kōhei Horikoshi.<br /><br />
          The story of My Hero Academia is set in a world where currently most
          of the human population has gained the ability to develop superpowers
          called "Quirks" (個性, Kosei), which occur in children within the age
          of four: it is estimated that around 80% of the world population has a
          Quirk. There are an endless number of Quirks, and it is extremely
          unlikely to find two people who have the exact same power, unless they
          are closely related. Among the Quirk-enhanced individuals, a few of
          them earn the title of Heroes, who cooperate with the authorities in
          rescue operations and apprehending criminals who abuse their powers,
          commonly known as Villains. In addition, Heroes who excel on their
          duties gain celebrity status and are recognized as "Pro Heroes"
        <br /><br />
          The series focuses on Izuku Midoriya, a young man who dreams of
          becoming a Hero despite being bullied by his violent childhood friend
          Katsuki Bakugo for lacking a Quirk. Both youths idolize one of the
          world's greatest heroes All Might, who they both met with Izuku being
          one of few to know of a critical injury All Might has been concealing
          from the public eye to maintain morale. All Might also reveals the
          nature of his Quirk "One For All" and passes it down to Izuku to
          succeed him after seeing the youth's determination in the face of
          danger. As Izuku begins his path to becoming a hero in attending U.A.
          High School (雄英高校, Yūei Kōkō) alongside Bakugo and the friends
          they make in Class 1-A, a nemesis to the "One For All" users named All
          For One conditions his apprentice Tomura Shigaraki to destroy the
          current society and its heroes.
        </p>
        <button className={Style.btn}><a href="https://en.wikipedia.org/wiki/My_Hero_Academia" className = {Style.web}>Go to Wiki</a></button>
        </div>
      </div>
  );
};
