// Accessing Submit button and ol and inputbox
let input = document.querySelector("input");
let ol = document.querySelector("ol");
let submit = document.querySelector(".submit");

// Adding event on clicking submit button

submit.addEventListener("click" , function(){

    // ctreating list item and appending value of task

    let item = document.createElement("li");
    let input = document.querySelector("input");
    let task = input.value;
    item.innerText = task;

    // creating delete button for all

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");


    // Appending Button and list item on Ordered list 
    
    item.appendChild(dltbtn);
    ol.appendChild(item);

    // Reset the value of the input box 
    input.value ="";
});

input.addEventListener("keydown" , function(event){

    if (event.key == "Enter"){

        // ctreating list item and appending value of task
    
        let item = document.createElement("li");
        let input = document.querySelector("input");
        let task = input.value;
        item.innerText = task;
    
        // creating delete button for all
    
        let dltbtn = document.createElement("button");
        dltbtn.innerText = "Delete";
        dltbtn.classList.add("delete");
    
    
        // Appending Button and list item on Ordered list 
        
        item.appendChild(dltbtn);
        ol.appendChild(item);
    
        // Reset the value of the input box 
        input.value ="";
    }

});


// Add event listener on Ol 

ol.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let parent = event.target.parentElement;
        console.log(parent);
        parent.remove();
        console.log("Delete");
    }
})
