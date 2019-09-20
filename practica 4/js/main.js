const addbtn = document.querySelector('.addbtn');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');


class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('iteminput');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let edtbtn = document.createElement('button');
        edtbtn.innerHTML = "<i class='fa fa-edit fa-lg'></i>";
        edtbtn.classList.add('edtbtn');

        let rmvbtn = document.createElement('button');
        rmvbtn.innerHTML ="<i class='fa fa-trash fa-lg'></li>";
        rmvbtn.classList.add('rmvbtn');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edtbtn);
        itemBox.appendChild(rmvbtn);

        edtbtn.addEventListener('click',() => this.edit(input));
        
        rmvbtn.addEventListener('click', () => this.remove(itemBox));
    
    }

    edit(input){
        input.disabled = !input.disabled;
        
        if(!input.disabled)
            input.classList.add("dibujar-edit");
        else
            input.classList.remove("dibujar-edit");
    }

    remove(item){
        container.removeChild(item);
    }

   
}

addbtn.addEventListener('click', () => new item(inputValue.value));
