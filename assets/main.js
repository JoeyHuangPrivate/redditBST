var query = "all";
var subReddit = "paintballBST";
var searchTerm = "masks";

$.ajax({
    type:"GET",
    data:{
        q:query, 
        restrict_sr:"true"
    },
    url:"https://www.reddit.com/r/"+subReddit+"/search.json",
    success:function(response){
        var children = response.data.children;
        for (var i=0;i<=23;i++){
           
            var rowElement= document.getElementById("listing");
            var colElement= document.createElement("div");
            var h3Element= document.createElement("h3");
            
            colElement.setAttribute("class", "col-3");
            rowElement.appendChild(colElement);
            colElement.appendChild(h3Element);
            h3Element.innerHTML=children[i].data.author;

        }
    }
})

