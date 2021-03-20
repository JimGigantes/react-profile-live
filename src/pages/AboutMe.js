import React from "react";



function AboutMe() {
  
    return (
      <div>
      <div className="container">
        <div className="jumbotron">
          <h1 className="center-text"><strong>James Gigantes</strong></h1>
          <img src="/react-profile-live/Photos/James.jpg" className="img-rounded responsive"  alt="Photo of Master Gigantes" />
          
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3>Life of James</h3>
            <p>I was the 4th child of Nicholas and Phyllis Gigantes. I grew up in Northern New Jersey,
               attended Depaul Catholic High School. For his undergraduate degree, James attended the 
               University of Miami where he studied Economics and Liberal Arts. Having taken Classes in an
                expanse of subjects, it was difficult to decide on a first job. James soon found himself
                 working as a Business Systems analyst for Embraer Aircraft Holdings. While working for 
                 Embraer he taught himself how to automate reports using VBA and some minor Tricks and other 
                 small shortcuts. This fueled his interest in technology even more, soon he found himself 
                 working as a Delivery Coach for Norwegian Cruise Lines</p>
          </div>
          <div className="col-sm-6">
            <h3>Skills</h3>
            <ul > 
                <li>Agile Scrum</li>
                <li>HTML5, CSS, JavaScript, jquery</li>
                <li>Jira, Azure Devops, Rally</li>
                <li>MS excel VBA, VBA Selenium webdriver</li>
                <li>I change my own oil and breaks</li>
                <li>Karaoke Mr. Brightside by the Killers</li>
            </ul>
          </div>
          </div>
        </div>
      
    </div>

    )
  }


export default AboutMe;
