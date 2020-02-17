// Hamburger Toggle
const hamburgerButton = $('#toggleMenu');
const sidebar = $('.sidebar');

$(hamburgerButton).click(function() {
    if($(hamburgerButton).hasClass('is-active')) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

function openSidebar() {
    $(hamburgerButton).addClass('is-active');
    $(sidebar).addClass('active');
    $('html, body').addClass('locked');
}

function closeSidebar() {
    $(hamburgerButton).removeClass('is-active');
    $(sidebar).removeClass('active');
    $('html, body').removeClass('locked');
}

// Build skills list
const skills = [
    [
        "Front-end",
        ["HTML5/CSS3", "SASS", "Bootstrap", "JavaScript (ES6)", "jQuery", "Vue.JS", "React.js", "Gatsby.js"]
    ],
    [
        "Back-end",
        ["Node.js", "PHP", "Laravel", "MySQL"]
    ],
    [
        "Conhecimentos e Habilidades",
        ["Git", "WordPress", "Web Design Responsivo", "SEO", "UX/UI", "Photoshop"]
    ]
];

for (el in skills) {
    const htmlNode = `
        <div class="skills-campo">
            <h3 class="skills-campo-title">${skills[el][0]}</h3>
            <ul class="skills-lista">
                ${skills[el][1].map((item) => `
                    <li class="skill-item">
                        <span class="skill-name">${item}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    const currentSkills = $('.skills-detalhes');
    $(currentSkills).append(htmlNode);
}

 // get position
 var lastId;
 var sidebarMenu = $(".sidebar-menu");
 var menuItems = sidebarMenu.find("a");

scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
});

if($(window).scrollTop() === 0) {
    menuItems.eq(0).parent().addClass("active");
}
checkPosition();

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-40;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 300);
    
    closeSidebar();
    e.preventDefault();
});

 // Bind to scroll
$(window).scroll(function(){
    checkPosition();
});

function checkPosition() {
    // Get container scroll position
    var fromTop = $(this).scrollTop();

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top <= fromTop+300)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
}