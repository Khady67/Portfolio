class Portfolio{
  /**
   * @param (string) selector
   * */  
  constructor(selector){
      this.container = document.querySelector(selector)
      if(this.container == null){
          throw new Error("L'element ${selector} n'existe pas")
      }
      this.children = Array.prototype.slice.call(this.children = document.querySelectorAll('.js_item'))
      this.children.forEach((child) => {
          child.addEventListener('click',(e) => {
              e.preventDefault()
              this.show(child)
          })
      })
      //lorsque l'on clique sur un projet .js_item
        //on supprime l'élément actif
        //on clone le .js_body
        //on insere le clone après le .js_item

  }

  show (child){
    child.querySelector('.js_body').cloneNode(true)
    child.after(content)
  }
  

}

new Portfolio('#js_portfolio')