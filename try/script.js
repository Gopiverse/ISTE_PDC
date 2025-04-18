document.getElementById("edit-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get input values
    const h1Text = document.getElementById("h1Text").value.trim() || "Hi, Its <span>Sherlock</span>";
    const h3Text = document.getElementById("h3Text").value.trim() || "a Consulting";
    const para1 = document.getElementById("para1").value.trim() || "🕵️‍♂️ Welcome to <b>221B Baker Street</b>...";
    const para2 = document.getElementById("para2").value.trim() || "If you have a case that needs solving...";
    const methodsHeading = document.getElementById("methodsHeading").value.trim() || "Methods & Deduction";
    const heading1 = document.getElementById("heading1").value.trim() || "The Science ..";
    const heading2 = document.getElementById("heading2").value.trim() || " Observation & A ";
    const heading3 = document.getElementById("heading3").value.trim() || " Forensic Experime... ";
    const hpara1 = document.getElementById("hpara1").value.trim() || " When you have eli";
    const hpara2 = document.getElementById("hpara2").value.trim() || " The world is ";
    const hpara3 = document.getElementById("hpara3").value.trim() || " I never guess. ";



    // Full HTML structure (unchanged except for updated content)
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Portfolio Website</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <!-- <script defer src="script.js"></script> -->
</head>
<body>
    <div id="preloader">
       <img src="images/locked-sherlock.gif" alt="Loading...">
    </div>
    <header class="header">
        <a href="#home" class="logo">Sherlock
            <span>Holmes</span>
        </a>
        <i class='bx bx-menu' id="menu-icon"></i>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#methods">Methods & Deduction</a>
            <a href="#cases">Cases & Investigations</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
        </nav>
        
    
    </header>
     <div class="cursor"></div>

    <!-- Circles for the Trail Effect -->
    <div class="trail-container">
    <section class="home" id="home">
        
        <div class="home-content">
              <h1>Hii its ${h1Text}</h1>
              <h3 class="text-animation">a <span></span>${h3Text}</h3>
              <p>${para1}</p>
              <p>${para2}</p>
  
               <div class="social-icons">
                <a href="https://t.me/SH_221Bbot"><i class='bx bxl-telegram'></i></a>
            </div>

            <div class="btn-group">
                <a href="#contact" class="btn">Contact</a>
            </div>
        </div>

        <div class="home-img">
            <img src="images/main_1.jpg" style="width:100%" alt="">
        </div>
        
    </section>
        
        <section class="methods" id="methods">
            <h2 class="heading">${methodsHeading}</h2>
            <div class="methods-container">
                <div class="method-item">
                    <h3>${heading1}</h3>
                    <p>${hpara1}</p>
                </div>

                <div class="method-item">
                    <h3>${heading2}</h3>
                    <p>${hpara2}</p>
                </div>

                <div class="method-item">
                    <h3>${heading3}</h3>
                    <p>${hpara3}</p>
                </div>
            </div>
        </section>

        <section class="cases" id="cases">
        <h2 class="heading">Cases & Investigations</h2>
        <div class="cases-container">
    
            <div class="case-box">
                <div class="case-info">
                    <h4>🕷️ The Adventure of the Speckled Band</h4>
                    <p>A sinister stepfather, a terrified woman, and a silent predator.</p>
                    <p class="solved">✔ Solved: A venomous scheme unraveled by logic.</p>
                </div>
            </div>
    
            <div class="case-box">
                <div class="case-info">
                    <h4>🕰️ The Man with the Twisted Lip</h4>
                    <p>A vanished husband, a beggar, and an opium den mystery.</p>
                    <p class="solved">✔ Solved: A disguise too clever for its own good.</p>
                </div>
            </div>
    
            <div class="case-box">
                <div class="case-info">
                    <h4>📜 The Five Orange Pips</h4>
                    <p>Five ominous warnings and a fate sealed by a secret society.</p>
                    <p class="solved">✔ Solved: A letter read too late, but justice caught up.</p>
                </div>
            </div>

            <div class="case-box">
                <div class="case-info">
                    <h4>🔎 A Scandal in Bohemia</h4>
                    <p>A clever woman, a royal scandal, and a photograph that could change everything.
</p>
                    <p class="solved">✔️ Solved: Outsmarted, but with admiration.</p>
                </div>
            </div>
    
        </div>
        </section>

        <section class="testimonials" id="testimonials">
            <div class="testimonials-box">
                <h2 class="heading">Testimonials</h2>
                <div class="wrapper">
                    <div class="testimonial-item">
                        <img src="images/1.jpg" alt="">
                        <h2>Dr. John Watson </h2>
                        <div class="rating"></div>
                        <p>Holmes has an extraordinary gift for deduction. There is no case too trivial for his brilliant mind.</p>
                    </div>

                    <div class="testimonial-item">
                        <img src="images/2.jpg" alt="">
                        <h2>Mycroft Holmes </h2>
                        <div class="rating"></div>
                        <p>My brother may be the detective, but I am the one who truly understands how the world works.</p>
                    </div>

                     <div class="testimonial-item">
                        <img src="images/3.jpg" alt="">
                        <h2>Inspector Lestrade </h2>
                        <div class="rating"></div>
                        <p>The man is infuriating, but I must admit, his methods work. Scotland Yard owes him more than we care to admit.</p>
                    </div>


                    <div class="testimonial-item">
                        <img src="images/4.jpg" alt="">
                        <h2>Irene Adler </h2>
                        <div class="rating"></div>
                        <p>He's a remarkable man, though I do wonder if he's capable of human emotion.</p>
                    </div>

                    <div class="testimonial-item">
                        <img src="images/5.jpg" alt="">
                        <h2>Professor Moriarty</h2>
                        <div class="rating"></div>
                        <p>Sherlock Holmes is the only man who has ever managed to outwit me. A rare intellect indeed.</p>
                    </div>

                    <div class="testimonial-item">
                        <img src="images/6.jpg" alt="">
                        <h2> Mrs. Hudson </h2>
                        <div class="rating"></div>
                        <p>He rarely pays his rent on time, but I wouldn’t have anyone else living at 221B.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact" id="contact">
             <div class="contact-box">
                <h2>📜 The Diogenes Club</h2>
                <p class="club-motto">"Silence, observation, and intellect—only the worthy may enter."</p>
                <p class="contact-intro">🔍 If you wish to contact Sherlock Holmes, you must do so with utmost discretion.</p>
                
                <div class="contact-details">
                    <p>📩 <strong>Send a Telegram to Sherlock Holmes:</strong></p>
                    <p>✉️ Email: <a href="mailto:sherlock@221bbakerstreet.com">sherlock@221bbakerstreet.com</a></p>
                </div>
        
                <p class="visit-note">🚪 Or visit 221B Baker Street—if you dare.</p>
            </div>


        </section>




        

    <script src="script.js"></script>
    <button id="mute-toggle" class="mute-button">🔊</button>

</body>
    `;
    
  console.log(htmlContent)
      // Create and download updated file
  const blob = new Blob([htmlContent], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "updated_sherlock.html";
  a.click();
});
  