class Tabs {
  constructor(links1) {

    this.links = links1
      //1. gets all 4 tab headers
    links1.forEach((link, index) => {
      const tabLink = new TabLink(link);
      if (index ===0){
        this.selectedTab = tabLink;
      } //2. creates a new instance for each of the 4 headers
    })
  }
  changeSelectedTab(newSelectedTab){
    this.selectedTab.deselect();
    this.selectedTab = newSelectedTab

  }
}


class TabLink {
  constructor(element) {
    this.element = element;  //3. individual header
    this.data = this.element.dataset.tab; //4. figures out which header this is
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`); //5. finds corresponding quote for this header
    this.tabItem = new TabItem(this.itemElement); //6. makes new instance of quote for this header (see TabItem class)
    this.element.addEventListener('click',() => this.select()) //7. when clicked, go to select
  };

  select() {
    tabs.changeSelectedTab(this);
    // const links = document.querySelectorAll('.tabs-link'); //8. gets all heading links 
    // links.forEach((link) => {
    //   link.classList.remove('tabs-link-selected')//9.removing this class changes background color of heading tab to red
    // });
    this.element.classList.add('tabs-link-selected') //10. makes this heading tab white
    this.tabItem.select()//11. go to TabItem select()

  }
  deselect(){
    this.element.classList.remove('tabs-link-selected')
    this.tabItem.deselect()
  }
}

class TabItem {
  constructor(element) {
    this.element = element; //see 6.
  }
  select() {
  //  const items = document.querySelectorAll('.tabs-item') //12. gets all quotes
  //   items.forEach((item) => {
  //     item.classList.remove('tabs-item-selected') //13. removing 'tabs-item-selected' makes all quotes display:none
  //   })
    this.element.classList.add('tabs-item-selected') //14 changes this quote to display:block
  }
  deselect(){
    this.element.classList.remove('tabs-item-selected')
  }
}

const links1 = document.querySelectorAll(".tabs-link");
const tabs = new Tabs(links1)

class Carousel{
  constructor(){
    this.rightButton = document.querySelector("#right-button")
    this.leftButton = document.querySelector("#left-button")
    this. boxes = document.querySelectorAll(".box")
    this.selectedBox = 0;
    this.leftButton.addEventListener("click",()=>this.leftClick())
    this.rightButton.addEventListener("click", ()=>this.rightClick())

  }
  leftClick(){
    this.boxes[this.selectedBox].classList.remove("box-selected")
    this.selectedBox--;
    if(this.selectedBox <0){
      this.selectedBox = this.boxes.length -1
    }
    this.boxes[this.selectedBox].classList.add('box-selected')
  }
  rightClick(){
    this.boxes[this.selectedBox].classList.remove("box-selected")
    this.selectedBox++;
    if(this.selectedBox >this.boxes.length-1){
      this.selectedBox = 0;
    }
    this.boxes[this.selectedBox].classList.add('box-selected')
  }
}

new Carousel();
