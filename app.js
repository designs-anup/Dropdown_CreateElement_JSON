const navItems = [
    {
      "name" : "Home",
      "url" : "#",
      "submenu" : []
    },
    {
      "name" : "About",
      "url" : "#",
      "submenu" : [
          {
              "name" : "Mission",
              "url" : "#"
            },
            {
              "name" : "Vision",
              "url" : "#"
            }
        ]
    },
    {
      "name" : "Services",
      "url" : "#",
      "submenu" : [
        {
          "name" : "Graphic Design",
          "url" : "#"
        },
        {
          "name" : "Web Design",
          "url" : "#"
        },
        {
          "name" : "Poster Design",
          "url" : "#"
        },
        {
          "name" : "Digital Marketing",
          "url" : "#"
        }
      ]
    },
    {
      "name" : "Contact",
      "url" : "#",
      "submenu" : []
    }
  ];

// console.log(navItems);

const navigation = document.querySelector('#navigation');

const navList = document.createElement('ul')
navList.className = "navList"

// console.log(navList);

for (let i = 0; i < navItems.length; i++) {
    // console.log(navItems[i].name);

    let navListItem = document.createElement('li')
    let navListItemSub = document.createElement('ul')
    let navListHref = document.createElement('a')
    

    navListHref.setAttribute('href', navItems[i].url)
    navListHref.innerText = navItems[i].name
    navListItem.appendChild(navListHref)

    if (navItems[i].submenu.length > 0) {
      navListItemSub.className = "subNav"
      

      for (let j = 0; j < navItems[i].submenu.length; j++) {
        //  console.log(navItems[i].submenu[j].name);
        let navListItemSubList = document.createElement('li')
        let navListItemSubHref = document.createElement('a')

        navListItemSubHref.setAttribute("href", navItems[i].submenu[j].url)
        navListItemSubHref.innerText += navItems[i].submenu[j].name

        navListItemSubList.appendChild(navListItemSubHref)
        navListItemSub.appendChild(navListItemSubList)
      }

      navListItem.appendChild(navListItemSub)

      
    }

    navList.appendChild(navListItem)
}

navigation.appendChild(navList)
