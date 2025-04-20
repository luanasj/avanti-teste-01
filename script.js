new Swiper('.swiper', {
    loop: true,
    spaceBetween: 17,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        480:{
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    }
  
  });

const changeElementText = (selector,text)=>{
    window.document.querySelectorAll(selector).forEach((paragraph)=>{
            paragraph.innerText = text    
    })
}

const changeTextOnResize = (width)=>{
    // console.log(el)
    const texts = [
        {
            destination: ".lowerBannerText .lowerBannerDiscount",
            mobile: "Selected items up to",
            desktop: "Itens selecionados com até"

        },
        {
            destination: ".postTextContainer .postText",
            mobile: "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n\nCras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et.",
            desktop: "Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.\n\nDuis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue."
        },
        {
            destination: ".footerDisclaimer",
            mobile: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
            desktop: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        }
    ]

    texts.map((text)=>{
        const {destination,mobile,desktop} = text
        changeElementText(destination,( width >= 1200 ? desktop : mobile))
    })
}


window.addEventListener('resize',(evt)=>{
    changeTextOnResize(evt.target.innerWidth)
}
)

window.document.addEventListener('DOMContentLoaded', (evt)=>{
    // console.log()
    changeTextOnResize(evt.target.body.clientWidth)
})

window.document.querySelectorAll(".footerNavbarSection h5 img").forEach((section)=>{
    section.addEventListener('click',(evt)=>{
        evt.target.classList.toggle('footerRotation')
        evt.target.parentNode.parentNode.querySelector('ul').classList.toggle("hideContent")
        console.log(evt.target.parentNode.parentNode.querySelector('ul').classList)
    })
})


window.document.querySelectorAll(".headerNavbar .department").forEach((dep)=>{
    const homeMenu = window.document.querySelector('.navbarContainer .homeMenu')
    

    dep.addEventListener('mouseenter',()=>{
        homeMenu.classList.add('showContent')
    })

    dep.addEventListener('mouseleave',()=>{
        homeMenu.classList.remove('showContent')
    })

})

const addNavContentToHomeMenu = (childHTMLElements)=>{
    const navigationContainer = document.querySelector('.menuNavigationContent')

    childHTMLElements.map((el)=>{
        navigationContainer.appendChild(el)
        console.log("Elemento adicionado")
    })
}

// const newDiv = document.createElement('div')
// newDiv.innerHTML = "O AMOR É LINDO"
// newDiv.style.border = '1px solid'

// addNavContentToHomeMenu([newDiv])

const homeMenuDepartments = (departments)=>{
    console.log(departments)
    const departmentsList = document.createElement('ul')
    departmentsList.classList.add('menuDepartmentsLinks')
    
    const homeMenuDepartmentOnMouseEnterHandler = ()=>{

    }

    const homeMenuDepartmentOnMouseLeaveHandler = ()=>{
        
    }

    departments.map((department)=>{
        const listItem = document.createElement('li')
        listItem.classList.add("menuDepartment")
        listItem.id = `menu-department-${department.id}`

        const listItemLink = document.createElement('a')
        listItemLink.href = `${department.url}`
        listItem.appendChild(listItemLink)

        listItemLink.innerHTML += `<span>${department.nome}</span><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.45948 5.03932L1.27979 8.27623C0.987123 8.57459 0.512778 8.57459 0.219501 8.27623C-0.0731669 7.97892 -0.0731669 7.49559 0.219501 7.1978L2.86978 4.49986L0.219501 1.80232C-0.0731669 1.50453 -0.0731669 1.02185 0.219501 0.723405C0.512778 0.425531 0.987123 0.425531 1.27979 0.723405L4.45948 3.96032C4.60614 4.10958 4.67943 4.3048 4.67943 4.50002C4.67943 4.69524 4.60614 4.89038 4.45948 5.03932Z"/> </svg>`
    
        listItem.addEventListener("mouseenter", homeMenuDepartmentOnMouseEnterHandler)
        listItem.addEventListener("mouseleave", homeMenuDepartmentOnMouseLeaveHandler)

        departmentsList.appendChild(listItem)
    })

    return departmentsList

}

const homeMenuCategories = (department,title)=>{
    const categoriesContainer = document.createElement("div")
    categoriesContainer.classList.add("categoriesContainer")

    if(title){
        categoriesContainer.innerHTML+= `<h6 class="categoriesTitle">${title}</h6>`
    }

    const categories = department.categorias
    const columns = Math.ceil(categories.length / 8)

    for(let i = 0;i<columns;i++){
        const categoriesColumn = document.createElement('ul')
        categoriesColumn.classList.add("categoriesColumn")

        const columnRows = categories.slice(8*i, 8*i+7)

        columnRows.map((row)=>{
            categoriesColumn.innerHTML += `<li><a href=${row.url}>${row.nome}</a></li>`
        })

        categoriesContainer.appendChild(categoriesColumn)
    }

    return categoriesContainer
}

const buildHomeMenuContent = async (dataURL)=>{
    const dados = await fetch(dataURL)
    const departments = await dados.json()
    addNavContentToHomeMenu([homeMenuDepartments(departments),homeMenuCategories(departments[1])])

    
}

buildHomeMenuContent("./assets/files/departments.json")