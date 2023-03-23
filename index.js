var Form = document.getElementById("my-form");
var NameInput = document.getElementById("name");
var InputEmail = document.getElementById("email");

//get list
let Ullist = document.getElementById("users");

Form.addEventListener("submit", onsubmit);


// let ArrData =[];
let ArrData = JSON.parse(localStorage.getItem("list"));
if (ArrData === null) {
    ArrData = [];
}

DisplayScreen(ArrData)



function onsubmit(ev) {
    ev.preventDefault();
    let obj = {
        Name: NameInput.value,
        Email: InputEmail.value,
    }
    ArrData.push(obj);
    localStorage.setItem("list", JSON.stringify(ArrData))

    DisplayScreen(ArrData);

}




function DisplayScreen(ArrData) {
    Ullist.innerHTML = "";
    ArrData.forEach((element, index) => {

        //creat row
        var tr = document.createElement("tr");

        //creat colunm for Name
        var td1 = document.createElement("td");
        td1.innerText = `Name :${element.Name}`

        //creat colunm for email;
        var td2 = document.createElement("td");
        td2.innerText = `Email :${element.Email}`


        //creat delete btn
        var Btn = document.createElement("button");
        Btn.innerText = "Delete";

        Btn.addEventListener("click", () => {
            ArrData = ArrData.filter((ele, i) => {
                if (index === i) {
                    return false;
                } else {
                    return true;
                }

            })
            localStorage.setItem("list", JSON.stringify(ArrData));
            DisplayScreen(ArrData)
        })



        // craet Eddit btn
        var Eddit = document.createElement("button");
        Eddit.innerText = "Eddit";

        Eddit.addEventListener("click", () => {
            ArrData = ArrData.filter((ele, i) => {
                if (index === i) {
                    return false;
                } else {
                    return true;
                }

            });
            //update the placeholder
            document.getElementById("name").value = element.Name;
            document.getElementById("email").value = element.Email

            localStorage.setItem("list", JSON.stringify(ArrData));
            DisplayScreen(ArrData)
        })


        //Append td1,td2 inside tr
        tr.append(td1, td2, Eddit, Btn);
        // append tr inside Ullist
        Ullist.append(tr);
    });


}
