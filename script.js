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

const changeIconsOnResize = (width)=>{
    const paths = [
        {
            destination: ".shoppingCart svg",
            mobile: `<path d="M8.75642 24.7675C8.36104 24.6283 7.92918 24.55 7.57639 24.3395C5.88812 23.3319 5.85575 20.9008 7.50255 19.8221C7.67022 19.7123 7.70117 19.6238 7.6492 19.4348C6.49361 15.2308 5.34101 11.0259 4.19813 6.81838C3.76549 5.22546 3.35857 3.62554 2.93947 2.02895C2.91923 1.95179 2.89459 1.87581 2.86804 1.78584H0.0527344V0.612305H3.42664C3.72217 0.716602 3.86573 0.930918 3.94186 1.23276C4.1485 2.05237 4.37905 2.86597 4.60031 3.68187C4.79977 4.41748 4.99941 5.15304 5.20268 5.90219H5.53278C11.7867 5.90219 18.0407 5.9038 24.2946 5.89808C24.6545 5.89779 24.9296 5.99441 25.0881 6.33327V6.67555C25.0582 6.74855 25.0199 6.81926 24.9997 6.89485C24.1788 9.95107 23.3593 13.0076 22.5402 16.0644C22.2179 17.2672 21.3659 17.9232 20.1192 17.9234C16.4602 17.9238 12.8012 17.9241 9.14217 17.922C8.9258 17.9218 8.70943 17.8995 8.47698 17.8866C8.58641 18.2858 8.70987 18.6662 8.79036 19.0556C8.8396 19.2939 8.94179 19.355 9.17836 19.3545C12.8537 19.3466 16.529 19.3467 20.2044 19.3501C21.6302 19.3514 22.7592 20.3824 22.9225 21.8171C23.0721 23.1333 22.1458 24.3881 20.7987 24.693C20.6805 24.7197 20.5615 24.7427 20.4428 24.7675H20.0517C19.9968 24.7532 19.9428 24.7334 19.8871 24.7255C17.9765 24.4529 16.9651 22.4088 17.9065 20.7217C17.94 20.6618 17.9696 20.5997 18.0052 20.5305H11.2094C11.2671 20.6365 11.3143 20.7204 11.359 20.8055C12.1216 22.2596 11.4259 24.0484 9.87905 24.5949C9.65872 24.6727 9.42436 24.7109 9.1965 24.7675H8.75642ZM23.7298 7.08633H5.49489C5.51542 7.17806 5.5296 7.25669 5.55073 7.33341C6.32716 10.1565 7.10478 12.9793 7.88082 15.8025C8.07661 16.5148 8.45976 16.8094 9.20447 16.8095C12.822 16.8097 16.4394 16.8097 20.0569 16.8095C20.8538 16.8095 21.2178 16.5275 21.4211 15.7629C21.9833 13.6485 22.5475 11.5346 23.1105 9.42029C23.3152 8.65158 23.5186 7.88257 23.7298 7.08633ZM20.2545 23.603C21.107 23.5993 21.7911 22.9152 21.7939 22.0636C21.7966 21.2095 21.0925 20.5095 20.2352 20.514C19.3902 20.5184 18.6967 21.2135 18.6946 22.0582C18.6925 22.9156 19.3904 23.6067 20.2545 23.603ZM8.96609 23.6032C9.82101 23.6065 10.5105 22.9315 10.5187 22.0833C10.527 21.2188 9.84243 20.5172 8.98736 20.514C8.13763 20.5107 7.44217 21.1938 7.43488 22.0389C7.4274 22.9087 8.10389 23.5999 8.96609 23.6032Z" fill="black"/>`,
            desktop: `<path d="M13.197 20.6616C13.2052 19.7663 12.8568 18.9048 12.2286 18.2669C11.6004 17.6289 10.7443 17.2674 9.84896 17.2618C8.95383 17.2564 8.09324 17.6074 7.45722 18.2375C6.82126 18.8677 6.4623 19.7251 6.45949 20.6202C6.45669 21.5156 6.81047 22.3751 7.44254 23.0092C8.07442 23.643 8.93291 23.9996 9.82827 23.9996C10.7163 23.9996 11.5685 23.6488 12.1995 23.0238C12.8304 22.3986 13.1889 21.5496 13.197 20.6616ZM8.34458 20.6616C8.33639 20.2565 8.49096 19.865 8.7736 19.5747C9.05623 19.2843 9.44345 19.1193 9.84855 19.1165C10.2539 19.1139 10.6432 19.2737 10.9297 19.5602C11.2162 19.8467 11.376 20.2361 11.3732 20.6412C11.3704 21.0465 11.2055 21.4337 10.9151 21.7163C10.6249 21.9987 10.2334 22.1533 9.82831 22.1451C9.43486 22.1451 9.05736 21.9888 8.77925 21.7107C8.50092 21.4324 8.34458 21.0551 8.34458 20.6616Z" fill="black"/>
                    <path d="M22.4999 20.662C22.4999 19.7766 22.1483 18.9276 21.5222 18.3017C20.8964 17.6757 20.0474 17.324 19.162 17.324C18.2768 17.324 17.4278 17.6757 16.8017 18.3017C16.1758 18.9276 15.824 19.7766 15.824 20.662C15.824 21.5472 16.1758 22.3962 16.8017 23.0223C17.4278 23.6482 18.2768 24 19.162 24C20.0474 24 20.8964 23.6482 21.5222 23.0223C22.1483 22.3962 22.4999 21.5472 22.4999 20.662ZM17.6785 20.662C17.6865 20.2709 17.8452 19.8982 18.1218 19.6218C18.3984 19.3452 18.7712 19.1863 19.162 19.1785C19.5555 19.1785 19.933 19.3348 20.2111 19.6129C20.4894 19.8911 20.6457 20.2686 20.6457 20.662C20.6541 21.058 20.5006 21.4403 20.2206 21.7203C19.9405 22.0004 19.5581 22.1541 19.162 22.1455C18.7686 22.1455 18.3913 21.9892 18.1132 21.7111C17.8348 21.4327 17.6785 21.0555 17.6785 20.662Z" fill="black"/>
                    <path d="M24.3853 5.02321H6.39755L5.68653 1.37611C5.64169 1.19695 5.54898 1.03332 5.41834 0.902677C5.28769 0.77203 5.12406 0.679326 4.94491 0.634484L1.69964 0.0164042V0.0161886C1.45409 -0.0295159 1.20034 0.0224404 0.992542 0.160848C0.784716 0.299471 0.639195 0.513765 0.587018 0.758011C0.54196 0.9999 0.594563 1.24977 0.733836 1.45264C0.872888 1.65551 1.08697 1.79478 1.32885 1.83983L3.98683 2.33418L6.24296 13.7079V13.7081C6.39905 14.4801 6.816 15.1747 7.42376 15.6757C8.03174 16.1765 8.79337 16.4531 9.58094 16.4588H19.7184C20.4553 16.4618 21.1731 16.2253 21.764 15.7851C22.355 15.3446 22.7868 14.7241 22.9944 14.017L25.2816 6.16672C25.3527 5.88926 25.296 5.59434 25.127 5.3632C24.9455 5.14114 24.6717 5.01567 24.3852 5.02321H24.3853ZM21.2019 13.5226C21.1178 13.849 20.9251 14.137 20.6554 14.3392C20.3857 14.5414 20.0554 14.6458 19.7184 14.6352H9.58098C9.22462 14.6352 8.87945 14.5121 8.60328 14.2868C8.32733 14.0615 8.13783 13.7479 8.06646 13.3988L6.76838 6.87749H23.1489L21.2019 13.5226Z" fill="black"/>`
        }
    ]

    paths.map(path=>{
        const {destination,mobile,desktop} = path
        document.querySelector(destination).innerHTML = width >= 1200 ? desktop : mobile
    })
}


window.addEventListener('resize',(evt)=>{
    const pageWidth = evt.target.innerWidth
    changeTextOnResize(pageWidth)
    changeIconsOnResize(pageWidth)
}
)

window.document.addEventListener('DOMContentLoaded', (evt)=>{
    const pageWidth = evt.target.body.clientWidth
    changeTextOnResize(pageWidth)
    changeIconsOnResize(pageWidth)
})

window.document.querySelector(".searchBar .searchButton").addEventListener('click',(evt)=>{
    const searchItem = document.querySelector(".searchBar input").value
    const spanText = `Você buscou por: ${searchItem}`


    const searchInfo = document.querySelector(".searchBar .showSearchContent")
    searchInfo.innerText = spanText

    setTimeout((text) => {
        if (searchInfo.innerText == text){searchInfo.innerText = ""}
    }, 5000, spanText);

})


window.document.querySelectorAll(".footerNavbarSection h5 img").forEach((section)=>{
    section.parentNode.addEventListener('click',(evt)=>{
        section.classList.toggle('footerRotation')
        section.parentNode.parentNode.querySelector('ul').classList.toggle("hideContent")
        // console.log(evt.target.parentNode.parentNode.querySelector('ul').classList)
    })
})


const addNavContentToHomeMenu = (childHTMLElements)=>{
    const navigationContainer = document.querySelector('.menuNavigationContent')

    childHTMLElements.map((el)=>{
        navigationContainer.appendChild(el)
        // console.log("Elemento adicionado")
    })
}


const removeElement = (classSelector)=>{
    const previousContainer = document.querySelector(classSelector)
    previousContainer.remove()
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

        let isFirstElement = true

        columnRows.map((row)=>{
            if(row.nome){
                const rowItem = document.createElement('li')
                rowItem.innerHTML += `<a href=${row.url}>${row.nome}</a>`

                if(isFirstElement){
                    rowItem.classList.add("emphasizedItem")
                    isFirstElement = false
                }

                rowItem.addEventListener('mouseEnter',(evt=>{
                    evt.target.parentNode.querySelector("emphasizedItem").classList.remove("emphasizedItem")
            }))

                categoriesColumn.appendChild(rowItem)
            }
        })

        categoriesContainer.appendChild(categoriesColumn)
    }

    return categoriesContainer
}

const homeMenuDepartments = (departments)=>{

    const departmentsList = document.createElement('ul')
    departmentsList.classList.add('menuDepartmentsLinks')

    const homeMenuDepartmentOnMouseEnterHandler = (evt,dep)=>{
        evt.target.parentNode.querySelector(".emphasizedItem").classList.remove("emphasizedItem")
        removeElement(".categoriesContainer")
        addNavContentToHomeMenu([homeMenuCategories(dep)])
    }

    let isFirstElement = true

    departments.map((department)=>{
        const listItem = document.createElement('li')
        listItem.classList.add("menuDepartment")
        listItem.id = `menu-department-${department.id}`

        const listItemLink = document.createElement('a')
        listItemLink.href = `${department.url}`
        if(isFirstElement){
            listItemLink.classList.add("emphasizedItem")
            isFirstElement = false
        }
        listItem.appendChild(listItemLink)


        listItemLink.innerHTML += `<span>${department.nome}</span><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.45948 5.03932L1.27979 8.27623C0.987123 8.57459 0.512778 8.57459 0.219501 8.27623C-0.0731669 7.97892 -0.0731669 7.49559 0.219501 7.1978L2.86978 4.49986L0.219501 1.80232C-0.0731669 1.50453 -0.0731669 1.02185 0.219501 0.723405C0.512778 0.425531 0.987123 0.425531 1.27979 0.723405L4.45948 3.96032C4.60614 4.10958 4.67943 4.3048 4.67943 4.50002C4.67943 4.69524 4.60614 4.89038 4.45948 5.03932Z"/> </svg>`
    
        listItem.addEventListener("mouseenter", (evt)=>{homeMenuDepartmentOnMouseEnterHandler(evt,department)})

        departmentsList.appendChild(listItem)
    })

    return departmentsList

}

const showContentOnHoveringNavbar = ()=>{
    window.document.querySelectorAll(".headerNavbar .department").forEach((dep)=>{
        const homeMenu = window.document.querySelector('.navbarContainer .homeMenu')
        
    
        dep.addEventListener('mouseenter',()=>{
            homeMenu.classList.add('showContent')
        })
    
        dep.addEventListener('mouseleave',()=>{
            homeMenu.classList.remove('showContent')
        })
    })

}

const addNavbarDepartments = (departments)=>{
    const navbarList = document.createElement('ul')

    const navbarDepartmentMouseEnterHandler = (dep) =>{
        if(document.querySelector(".menuNavigationContent").children.length > 0){
            [...document.querySelector(".menuNavigationContent").children].forEach(child=>child.remove())
        }
        addNavContentToHomeMenu([homeMenuCategories(dep, dep.nome)])        
    }


    for(let i = 0;i<8;i++){
        const departmentData = departments[i]

        const listDepartment = document.createElement('li')
        listDepartment.classList.add('department')
        listDepartment.id = `department${departmentData.id}`

        listDepartment.innerHTML += `<a href="${departmentData.url}">${departmentData.nome}</a>`

        listDepartment.addEventListener("mouseenter",()=>{navbarDepartmentMouseEnterHandler(departmentData)})
        
        navbarList.appendChild(listDepartment)
    }

    const headerNavbar = document.querySelector('.headerNavbar')
    
    if(headerNavbar.children.length > 0) {
        [...headerNavbar.children].forEach(child=>child.remove())
    }
    headerNavbar.appendChild(navbarList)

    showContentOnHoveringNavbar()
}

const buildHomeMenuContent = async (dataURL)=>{
    const dados = await fetch(dataURL)
    const departments = await dados.json()

    addNavbarDepartments(departments)
    
    document.querySelector('.navbarContainer #showNavbarBtn').addEventListener('mouseenter',()=>{
        [...document.querySelector('.homeMenu .menuNavigationContent').children]?.forEach(el=>el.remove())
        
        addNavContentToHomeMenu([homeMenuDepartments(departments),homeMenuCategories(departments[0])])
    })
 
}

buildHomeMenuContent("./assets/files/departments.json")

document.querySelectorAll(".cardList.swiper-wrapper").forEach((el)=>{
    for(let i =0;i<8;i++){
        const cardItem = document.createElement('li')
        cardItem.classList.add('swiper-slide')
        cardItem.classList.add('cardItem')
        cardItem.innerHTML = `<a href="#" class="cardLink">
                            <span class="cardItemStatus">NOVO</span>
                            <img class="cardImg" src="./assets/images/produto-avanti-Mockup.png" alt="product-picture">
                            <div class="cardInfo">
                                <h3 class="cardTitle">Lorem ipsum dolor sit amet consectetuer adipiscing elit</h3>
                                <div class="priceContainer">
                                    <div class="cardPriceContainer">
                                        <span class="previousPrice">R$ 100,00</span>
                                        <span class="currentPrice">R$79,90</span>
                                    </div>
                                    <span class="itemDiscount">10% off</span>
                                    <span class="installmentOptions">Ou em até <span>10x de R$ 7,90</span></span>
                                </div>
                            </div>
                            <a href="" class="buyItemBtn" ><button>Comprar</button></a>
                        </a>`

        el.appendChild(cardItem)
    }
})



