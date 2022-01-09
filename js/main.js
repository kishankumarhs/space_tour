
var explore = document.getElementById("explore")
if (explore) {
    explore.onclick = (e) => {
        window.location.href = 'destination-moon.html'
    }
}

var activePage = window.location.pathname;

var ul = document.querySelectorAll(".navbar a ");


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

    fetch("./data.json")
        .then((Response) => {
            return Response.json();
        }).then(jsonData => {
            var data = jsonData;
            var destination = data.destinations
            var crew = data.crew
            var technology = data.technology
            LoadDestination(destination)
            LoadCrew(crew)
            LoadTech(technology)
        })

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