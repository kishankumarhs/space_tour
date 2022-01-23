
var explore = document.getElementById("explore")
if (explore) {
    explore.onclick = (e) => {
        window.location.href = 'destination-moon.html'
    }
}

var activePage = window.location.pathname;

var ul = document.querySelectorAll(".navbar a ");

const DATA_JSON = {
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}

ul.forEach(link => {
    link.classList.remove("active")
    if (link.href.includes(`${activePage}`)) {
        window.onresize = () => {
            if (window.innerWidth <= 475) {
                link.classList.add("mbl_active")
                link.classList.remove("active")
            } else {
                link.classList.add("active")
                link.classList.remove("mbl_active")

            }
        }
        if (window.innerWidth <= 475) {
            link.classList.add("mbl_active")
            link.classList.remove("active")
        } else {
            link.classList.add("active")

        }



    } else {
        link.classList.remove("active")
    }
})



window.onload = () => {

    const LoadDestination = (data) => {
        var sub = document.querySelector(".subnav");
        if (sub) {
            const dest_img = document.getElementById("dest_img")
            const dest_head = document.getElementById("dest_head");
            const dest_para = document.getElementById("dest_para");
            const dest_distance = document.getElementById("dest_distance");
            const travel_time = document.getElementById("travel_time")
            sub.addEventListener("click", (e) => {
                document.querySelectorAll(".subnav a").forEach((a) => {
                    a.classList.remove("active")
                });
                if (e.target.tagName == "A") {
                    e.target.classList.add("active")

                }
                var newdata = data[e.target.getAttribute("data-planet")];
                dest_img.setAttribute("src", newdata.images.png)
                dest_head.innerText = newdata.name
                dest_para.innerText = newdata.description;
                dest_distance.innerText = newdata.distance;
                travel_time.innerText = newdata.travel

            })
        }

    }

    const LoadCrew = data => {
        var dots = document.querySelector(".dots");
        if (dots) {
            var crew_role = document.getElementById("crew_role");
            var crew_name = document.getElementById("crew_name");
            var crew_img = document.getElementById("crew_img");
            var crew_description = document.getElementById("crew_description");
            dots.addEventListener("click", e => {
                document.querySelectorAll(".dots span").forEach(a => {
                    a.classList.remove('active_dot')


                })
                if (e.target.tagName == "SPAN") {
                    e.target.classList.add("active_dot");
                }
                newCrewData = data[e.target.getAttribute("data-crew")];
                crew_role.innerText = newCrewData.role;
                crew_name.innerText = newCrewData.name;
                crew_description.innerText = newCrewData.bio;
                crew_img.setAttribute("src", newCrewData.images.png)

            })
        }

    }

    const LoadTech = data => {
        var big_dots = document.querySelector(".bigDots");
        if (big_dots) {
            var techName = document.getElementById("tech_name");
            var tech_desc = document.getElementById("tech_desc");
            var tech_img = document.getElementById("tech_img");
            big_dots.addEventListener("click", e => {
                document.querySelectorAll(".bigDots div").forEach(d => {
                    d.classList.remove("active_bigDot");
                })
                var newTechData = data[e.target.getAttribute("data-tech")]
                if (e.target.tagName == "DIV") {
                    e.target.classList.add("active_bigDot");
                }
                techName.innerText = newTechData.name;
                tech_desc.innerText = newTechData.description;
                window.onresize = () => {
                    if (window.innerWidth <= 764) {
                        tech_img.style.background = `${"url(" + newTechData.images.landscape + ")"}`

                    } else {
                        tech_img.style.background = `${"url(" + newTechData.images.portrait + ")"}`

                    }
                }

                tech_img.style.background = `${"url(" + newTechData.images.portrait + ")"}`


            })
        }

    }
    var data = DATA_JSON;
    var destination = data.destinations
    var crew = data.crew
    var technology = data.technology
    LoadDestination(destination)
    LoadCrew(crew)
    LoadTech(technology)
    var menu = document.querySelector('.navbar');
    var menu_open = document.getElementById("menu_open");
    var menu_close = document.getElementById("menu_close");
    menu_open.onclick = () => {
        menu.style.right = "0%";
        menu_close.style.display = "block"
        menu_open.style.display = "none"
    }
    menu_close.onclick = () => {
        menu.style.right = "-100%";
        menu_open.style.display = "block"
        menu_close.style.display = "none"
    }

}
