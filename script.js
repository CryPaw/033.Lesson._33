class Form {
    constructor() {
    this.tdname = document.querySelector(".tdname");
    this.tdsurname = document.querySelector(".tdsurname");
    this.tdgender = document.querySelector(".tdgender");
    this.tdcity = document.querySelector(".tdcity");
    this.tdadress = document.querySelector(".tdadress");
    this.tdlanguages = document.querySelector(".tdlanguages");
    this.formgr = document.querySelector(".form-group");
    this.table = document.querySelector("#my-table");

    this.nameInput = document.getElementById("nameInput")
    this.surnameInput = document.getElementById("surnameInput")
    this.namInput = document.createElement("input");
    this.namInput.type = ("text");
    this.namInput.placeholder = ("Введіть своє ім'я");
    this.namInput.id = ("nInput");
    this.namInput.name = ("nIcK");
    this.surInput = document.createElement("input");
    this.surInput.type = ("text");
    this.surInput.placeholder = ("Введіть своє прізвище");
    this.surInput.id = ("sInput");
    this.surInput.name = ("nIcK");
    
    this.radioGender = document.getElementById("radioGender")
    this.radioCreate1 = document.createElement("input");
    this.labelCreate1 = document.createElement("label");
    this.radioCreate1.type = ("radio");
    this.radioCreate1.name = ("gender");
    this.labelCreate1.textContent = ("Чол");
    this.radioCreate2 = document.createElement("input");
    this.labelCreate2 = document.createElement("label");
    this.radioCreate2.type = ("radio");
    this.radioCreate2.name = ("gender");
    this.labelCreate2.textContent = ("Жін");

    this.citySelect = document.getElementById("citySelect");
    this.selectCreate = document.createElement("select");
    this.selectCreate.name = ("city");

    this.cityOption1 = document.createElement("option");
    this.cityOption1.value = ("");
    this.cityOption1.textContent = ("Оберіть значення");
    this.cityOption2 = document.createElement("option");
    this.cityOption2.value = ("1");
    this.cityOption2.textContent = ("Київ");
    this.cityOption3 = document.createElement("option");
    this.cityOption3.value = ("2");
    this.cityOption3.textContent = ("Дніпро");
    this.cityOption4 = document.createElement("option");
    this.cityOption4.value = ("3");
    this.cityOption4.textContent = ("Полтава");


    this.adress = document.getElementById("adress");
    this.adresstxt = document.createElement("textarea");

    this.lang = document.getElementById("lang");
    this.langbox1 = document.createElement("input");
    this.langbox1.type = ("checkbox");
    this.langbox1.id = ("b1");
    this.langbox1.value = ("Англійська");
    this.langbox1.name = ("english")
    this.langbox1.required = ("required")
    this.labelBox1 = document.createElement("label");
    this.labelBox1.htmlFor = ("b1");
    this.labelBox1.textContent = ("Англійська");
    this.langbox2 = document.createElement("input");
    this.langbox2.name = ("ukrainian")
    this.langbox2.type = ("checkbox");
    this.langbox2.value = ("Українська");
    this.langbox2.id = ("b2");
    this.labelBox2 = document.createElement("label");
    this.labelBox2.htmlFor = ("b2");
    this.labelBox2.textContent = ("Українська");
    this.langbox3 = document.createElement("input");
    this.langbox3.name = ("german")
    this.langbox3.value = ("Німецька");
    this.langbox3.type = ("checkbox");
    this.langbox3.id = ("b3");
    this.labelBox3 = document.createElement("label");
    this.labelBox3.htmlFor = ("b3");
    this.labelBox3.textContent = ("Німецька");
    this.b1 = document.getElementById("b1"); 
    this.b2 = document.getElementById("b2"); 
    this.b3 = document.getElementById("b3"); 

    this.mybtndiv = document.getElementById("mybtndiv");
    this.mybtn = document.createElement("input");
    this.mybtn.id = ("mybtn");
    this.mybtn.type = ("submit");
    this.mybtn.name = ("gender");
    
    
    }

    addInputElement() {
                    
    
        this.namInput.addEventListener('keyup', (event) => {
             this.tdname.textContent = this.namInput.value;
        });
       
        this.surInput.addEventListener('keyup', (event) => {
            this.tdsurname.textContent = this.surInput.value;
        });

        this.radioCreate1.addEventListener('click', (event) => {
            this.tdgender.innerHTML = '';
            this.tdgender.textContent = ("Чоловік");
        });
    
        this.radioCreate2.addEventListener('click', (event) => {
            this.tdgender.innerHTML = '';
            this.tdgender.textContent = ("Жінка");
        });

        this.selectCreate.addEventListener('mouseup', (event) => {
            this.tdcity.innerHTML = '';
            console.log(this.selectCreate.value); 
            
            if (this.selectCreate.value == 1) {
                this.tdcity.innerHTML = '';
                this.tdcity.textContent = ("Київ");
             } else if (this.selectCreate.value == 2) {
               this.tdcity.innerHTML = '';
               this.tdcity.textContent = ("Дніпро");
             } else if (this.selectCreate.value == 3) {
                this.tdcity.innerHTML = '';
                this.tdcity.textContent = ("Полтава");
            }
        });

        this.adresstxt.addEventListener('keyup', (event) => {
            this.tdadress.innerHTML = '';
            this.tdadress.textContent = this.adresstxt.value;
        });

        document.addEventListener('DOMContentLoaded', function() {
            let checkboxes = document.querySelectorAll('input[type=checkbox]');
            let arrvalue = [];
            const tdlang = document.querySelector(".tdlanguages");
            for (let checkbox of checkboxes)
            {
                checkbox.addEventListener('change', function(event)
                {
                    if (event.target.checked) {
                        // alert(`${event.target.value} is checked`);
                        arrvalue.push(event.target.value);
                        tdlang.textContent = arrvalue;
                    }
                    else {
                        // alert(`${event.target.value} is unchecked`);
                        let i = arrvalue.indexOf(event.target.value);
                        console.log(arrvalue.indexOf())
                        if(event.target.checked == false) {
                            arrvalue.splice(i,1);
                        }
                        tdlang.textContent = arrvalue;
                    }
                });
            }
            
            console.log(arrvalue);
        }, false);

        this.mybtn.addEventListener('click', (event) => {
            this.table.style.setProperty("display", "block");
            this.formgr.style.setProperty("display", "none");
        });
        
       }

    inputRender() {
        this.nameInput.appendChild(this.namInput);
        this.surnameInput.appendChild(this.surInput);
    }

    radioRender() {
        this.radioGender.appendChild(this.radioCreate1);
        this.radioGender.appendChild(this.labelCreate1);
        this.radioGender.appendChild(this.radioCreate2);
        this.radioGender.appendChild(this.labelCreate2);
    }

    selectRender() {
        this.citySelect.appendChild(this.selectCreate);
        this.selectCreate.appendChild(this.cityOption1);
        this.selectCreate.appendChild(this.cityOption2);
        this.selectCreate.appendChild(this.cityOption3);
        this.selectCreate.appendChild(this.cityOption4);
    }

    textareaRender() {
        this.adress.appendChild(this.adresstxt);
    }

    checkboxRender() {
        this.lang.appendChild(this.langbox1);
        this.lang.appendChild(this.labelBox1);
        this.lang.appendChild(this.langbox2);
        this.lang.appendChild(this.labelBox2);
        this.lang.appendChild(this.langbox3);
        this.lang.appendChild(this.labelBox3);
    }

    buttonRender() {
        this.mybtndiv.appendChild(this.mybtn);
    }
}

const form = new Form();

form.inputRender();
form.radioRender();
form.selectRender();
form.textareaRender();
form.checkboxRender();
form.buttonRender();
form.addInputElement();