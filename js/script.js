/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["","Senior Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/**
 * init model dialog
 */

$( "#dialog-message" ).hide();
/* ============================== Aside ============================ */

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                     // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          //console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }


        function  submitToAPI(e) {
            e.preventDefault();
            var URL = "https://4q5hsix4b2.execute-api.us-east-2.amazonaws.com/prod/sendemail";
            var sendFrom = document.getElementById('name-input').value;
            var fromEmail = document.getElementById('email-input').value;
            var subject = document.getElementById('subject-input').value;
            var message = document.getElementById('message-input').value;
            var data = {
                from_address: 'chunhua.li.chen@gmail.com',
                to_address: 'chunhua.li.chen@gmail.com',
                from_name: sendFrom,
                email_subject: subject,
                message: " From: " + sendFrom +  "\n" + " Email: " + fromEmail + "\n" + " Subject: " + subject + "\n" + " Content: " + message
            }

            $.ajax({
                type: "POST",
                url: URL,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),
                success: function() {
                    document.getElementById("sendMsg").reset();
                    alert('Message send out successfully, will reply you shortly, thanks!')
                },
                error: function() {
                    alert('Post message error!')
                }
            })

        }
  $(".downloadResume").click((event) => {
     event.preventDefault();
     window.location.href="uploads/lichunhua.pdf"
  })

 
    document.querySelectorAll('.portfolio-img img').forEach(image => {
        image.onclick = () => {
            $(".popup-image").attr("style", 'display:block');
            $(".popup-image img").attr("src", image.getAttribute('src'));
            $(".popup-image p").html(image.getAttribute('alt'));
        }
    })

    document.querySelector('.popup-image span').onclick = () => {
        $(".popup-image").attr("style", 'display:none');
    }

 
      


