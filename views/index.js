
// BEGINNING OF DYNAMIC COPYRIGHT
const copyright = document.getElementById("copyright");
const year = new Date().getFullYear();
const month = new Date().getMonth();
copyright.innerHTML = `  <h5 style="text-align: center;"> &#169;Utumishi Academy ${year} </h5>`

//END OF COPYRIGHT

// START OF THE DYNAMIC ADDICTION Of TOP BUTTONS
//We are adding dynamically because each and every page of the website would have this categories.
let TopNav = document.getElementById("navigation");

TopNav.innerHTML = `<nav id="top-nav">
    <ul id="top-nav-info">
        <div id="f1-f2-f3-f4">
             <button id="f1-btn" class = "f-btn" data-form = "1" style = "background-color: rgb(15, 15, 230)"><li><a href="#">Form One</a></li></button> 
             <button id="f2-btn" class = "f-btn" data-form = "2" style = " background-color: rgb(8, 248, 8)"><li><a href="#">Form Two</a></li></button> 
             <button id="f3-btn" class = "f-btn" data-form = "3" style = "background-color: rgb(109, 3, 109) "><li><a href="#">Form Three</a></li></button> 
             <button id="f4-btn" class = "f-btn" data-form = "4" style = "background-color: rgb(185, 18, 18)"><li><a href="#">Form Four</a></li></button>
        </div>
    
        <div id="mock-kcse">
           <button id="mock-btn" class = "f-btn"  data-form = "5" style = "background-color: black"><li><a href="/kcsepapers">Mock Past Papers</a></li></button> 
           <button id="kcse-btn" class = "f-btn"  data-form = "6" style = "background-color: rgb(124, 124, 238)"><li><a href="/kcsepapers">KCSE Past Papers</a></li></button> 
        </div>

        <p style="text-align: center; font-size: larger;">******************************</p>
    </ul>
    </nav>`

//END OF THE DYNAMIC ADDITION OF TOP BUTTONS


//START OF THE BOTTOM SHORTCUT BUTTONS AND THE FOOTER SECTION
//We are adding dynamically because each part o the page would have this categories.

const bottomShortcut = document.getElementById("bottom-shortcut");
bottomShortcut.innerHTML = `<br>
    <div id="shortcut-heading" style="text-align: center;">SHORTCUT BUTTONS</div>
                      <p style="text-align: center; font-size: larger;">******************************</p>
    <div id="f1-f2-f3-f4">
      <button id="f1-btn" class = "f-btn"  data-form = "1" style = "background-color: rgb(15, 15, 230)"><li><a href="#">Form One</a></li></button> 
      <button id="f2-btn" class = "f-btn"  data-form = "2" style = " background-color: rgb(8, 248, 8)"><li><a href="#">Form Two</a></li></button> 
      <button id="f3-btn" class = "f-btn" data-form = "3" style = "background-color: rgb(109, 3, 109) "><li><a href="#">Form Three</a></li></button> 
      <button id="f4-btn" class = "f-btn" data-form = "4" style = "background-color: rgb(185, 18, 18)"><li><a href="#">Form Four</a></li></button>
    </div>
    <div id="extra-subject">
      <button id="extra-sub-btn" style = "background-color: rgb(124, 124, 238);" ><li><a href="#">Extracurricular Subjects</a></li></button> 
    </div>
    <div id="revision-materials">
      <button id="mock-btn" class = "f-btn"  data-form = "5" style = "background-color:rgb(143, 241, 143)"><li><a href="#">Mock Papers</a></li></button> 
      <button id="kcse-btn" class = "f-btn"  data-form = "6" style = "background-color: rgb(116, 67, 116)"><li><a href="/kcsepapers">KCSE Past Papers</a></li></button> 
      <button id="mock-btn" class = "f-btn"  data-form = "7" style = "background-color: rgb(218, 83, 83)"><li><a href="#">Solved Past Papers</a></li></button> 
    </div><hr>


    <div id="footer-section">
        <div id="top-score-kcse">
            <h3 style="color: white; font-weight: bold;"><i class="bi bi-mortarboard-fill"></i>&nbsp; Top Score KCSE</h3>
            <p id="footer-paragraph" style=" color: rgb(126, 126, 126);">
              Online learning is when you take courses online instead of in a physical classroom. If your schedule makes it hard to attend classes, if you prefer studying at your own pace or if you live far from campus, online learning might be for you. ... earn a certificate or diploma without setting foot in a physical classroom.
            </p>

          <div id="social-handles">
              <div id="facebook" class="social-icon"><a href="#"><i class="bi bi-facebook" style= "color: white;"></i></a></div>
              <div id="twitter" class="social-icon"><a href="#"><i class="bi bi-twitter"  style= "color: white;"></i></a></div>
              <div id="whatsapp" class="social-icon"><a href="#"><i class="bi bi-whatsapp"></i></a></div>
              <div id="instagram" class="social-icon"><a href="#"><i class="bi bi-instagram"></i></a></div>
          </div>
        </div>

        <div id="web-tools">
              <ul id="web-tools-list" >
                  <li ><h3><i class="bi bi-gear"></i>&nbsp; WEB TOOLS</h3></li>
                  <li class="footer-list" ><a href="#" class="footer-list">Contact Form</a></li>
                  <li class="footer-list" ><a href="#" class="footer-list">Privacy Policy</a></li>
                  <li class="footer-list"><a href="#" class="footer-list">Sitemap</a></li>
                  <li class="footer-list"><a href="#" class="footer-list">Terms of Service</a></li>
                  <li class="footer-list"><a href="#" class="footer-list">Form 0ne</a></li>
                  <li class="footer-list"><a href="#" class="footer-list">Form Two</a></li>
                  <li class="footer-list" ><a href="#" class="footer-list">Form Three</a></li>
                  <li class="footer-list" ><a href="#" class="footer-list">Form Four</a></li>
              </ul>
        </div>

        <div id="past-papers">
            <ul id="past-papers-list">
              <li> <h3><i class="bi bi-envelope"></i>&nbsp; TOP SCORE PAST PAPERS</h3></li>
              <li class="footer-list"><a href="#"  class="footer-list">Standard Exams</a></li>
              <li class="footer-list"><a href="#" class="footer-list">Form Two Exams</a></li>
              <li class="footer-list"><a href="#" class="footer-list">Form Four Exams</a></li>
              <li class="footer-list"><a href="#" class="footer-list">Qualifying Tests</a></li>
              <li class="footer-list" ><a href="#" class="footer-list">Diploma in Secondary Exams</a></li>
            </ul>

        </div>
    </div>`


//END OF THE DYNAMIC ADDITION OF SHORTCUT BUTTON AND FOOTER SECTION


//START OF ONCLICK OF A BUTTON CHANGES THE REFERENCE SECTION


const yearHead = document.querySelector(".year-head");
const yearHeadTwo = document.querySelector(".year-head-2");

const allSubjectsDisplay = document.getElementById("all-subject-display");
const kcseAllSubjectDisplay = document.getElementById("kcse-all-subjects");


document.querySelectorAll(".f-btn").forEach(item => {
  item.addEventListener("click", () => {
    if (item.dataset.form == 1) {
      yearHead.innerHTML = `<a class="year-head" style="color: black; margin-left:0px;">FORM 1 SUBJECTS </a>`;
      yearHeadTwo.innerHTML = `<h3 class="year-head-2">FORM 1 SUBJECTS</h3>`;
    }

    if (item.dataset.form == 2) {
      yearHead.innerHTML = `<a class="year-head" style="color: black;margin-left:0px;">FORM 2 SUBJECTS </a>`;
      yearHeadTwo.innerHTML = `<h3 class="year-head-2">FORM 2 SUBJECTS</h3>`;
    }

    if (item.dataset.form == 3) {
      yearHead.innerHTML = `<a class="year-head" style="color: black; margin-left:0px;">FORM 3 SUBJECTS </a>`;
      yearHeadTwo.innerHTML = `<h3 class="year-head-2">FORM 3 SUBJECTS</h3>`;
    }

    if (item.dataset.form == 4) {
      yearHead.innerHTML = `<a class="year-head" style="color: black; margin-left:0px;">FORM 4 SUBJECTS </a>`;
      yearHeadTwo.innerHTML = `<h3 class="year-head-2">FORM 4 SUBJECTS</h3>`;
    }

    if (item.dataset.form == 5) {
      yearHead.innerHTML = `<a class="year-head" style="color: black; margin-left:0px;">Mock Past Papers </a>`;
      yearHeadTwo.innerHTML = `<h3 class="year-head-2">Mock Past Papers</h3>`;
    }
    if (item.dataset.form == 1 || item.dataset.form == 2 || item.dataset.form == 3 || item.dataset.form == 4) {
      kcseAllSubjectDisplay.innerHTML = ``;
      allSubjectsDisplay.innerHTML = `<hr><div id="subject-1">
                <span id="img" >
                    <img src="history.jfif">
                </span>
                <div id="heading-description-syllabus-topics">
                    <h4 style="margin-top: -15px">HISTORY</h4>
                    <p style="text-align: justify; margin-top: -20px;">History is the study of the human past as it is described in written documents left behind by humans. The past, with all of its complicated choices and events, participants dead and history told, is what the general public perceives to be the immutable bedrock on which historians and archaeologists stand.
     
                        But as purveyors of the past, historians recognize that the bedrock is really quicksand, that bits of each story are yet untold, and that what has been told is colored by the conditions of today. While not untrue to say that history is the study of the past, here is a collection of much more clear and accurate descriptions.
                        
                    </p>
                    <div id="syllabus-topics">
                        <a href="#"><button id="view-syllabus">View Syllabus</button></a>
                        <a href="#"><button id="view-topic" >View Topic</button></a>
                    </div>
                       
                </div>
              </div>
              <div id="subject-1">
                <span id="img">
                    <img src="biology.png">
                </span>
                <div id="heading-description-syllabus-topics">
                    <h4 style="margin-top: -15px" >BIOLOGY</h4>
                    <p style="text-align: justify; margin-top: -20px;">History is the study of the human past as it is described in written documents left behind by humans. The past, with all of its complicated choices and events, participants dead and history told, is what the general public perceives to be the immutable bedrock on which historians and archaeologists stand.
     
                        But as purveyors of the past, historians recognize that the bedrock is really quicksand, that bits of each story are yet untold, and that what has been told is colored by the conditions of today. While not untrue to say that history is the study of the past, here is a collection of much more clear and accurate descriptions.
                    </p>
                    <div id="syllabus-topics">
                        <a href="#"><button  id="view-syllabus">View Syllabus</button></a>
                        <a href="#"><button  id="view-topic" >View Topic</button></a>
                    </div>
                       
                </div>
              </div>
              <div id="subject-1">
                <span id="img">
                    <img src="chemistry.jpg">
                </span>
                <div id="heading-description-syllabus-topics">
                    <h4 style="margin-top: -15px" >CHEMISTRY</h4>
                    <p style="text-align: justify; margin-top: -20px;">History is the study of the human past as it is described in written documents left behind by humans. The past, with all of its complicated choices and events, participants dead and history told, is what the general public perceives to be the immutable bedrock on which historians and archaeologists stand.
     
                        But as purveyors of the past, historians recognize that the bedrock is really quicksand, that bits of each story are yet untold, and that what has been told is colored by the conditions of today. While not untrue to say that history is the study of the past, here is a collection of much more clear and accurate descriptions.
                    </p>
                    <div id="syllabus-topics">
                        <a href="#"><button  id="view-syllabus">View Syllabus</button></a>
                        <a href="#"><button  id="view-topic" >View Topic</button></a>
                    </div>
                       
                </div>
              </div>
    
              <div id="subject-1">
                <span id="img">
                    <img src="physics.jpg">
                </span>
                <div id="heading-description-syllabus-topics">
                    <h4 style="margin-top: -15px">PHYSICS</h4>
                    <p style="text-align: justify; margin-top: -20px;">History is the study of the human past as it is described in written documents left behind by humans. The past, with all of its complicated choices and events, participants dead and history told, is what the general public perceives to be the immutable bedrock on which historians and archaeologists stand.
     
                        But as purveyors of the past, historians recognize that the bedrock is really quicksand, that bits of each story are yet untold, and that what has been told is colored by the conditions of today. While not untrue to say that history is the study of the past, here is a collection of much more clear and accurate descriptions.
                    </p>
                    <div id="syllabus-topics">
                        <a href="#"><button  id="view-syllabus">View Syllabus</button></a>
                        <a href="#"><button id="view-topic" >View Topic</button></a>
                    </div>
                       
                </div>
              </div>
              
          </div>`
    }

  });

});
//END OF THE REFERENCING ON CLICK OF THE BUTTONS.


//SCRIPT IN REFERENCE TO THE KCSEPAPERS PAGE





