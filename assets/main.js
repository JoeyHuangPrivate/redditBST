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
        console.log(response);
        var children = response.data.children;
        console.log(children);
        for (var i=0;i<=23;i++){
           
            var rowElement= document.getElementById("listing");
            var colElement= document.createElement("div");
            var h2Element= document.createElement("h2");
            var h3Element= document.createElement("h3");
            
            //var imgElement= document.createElement("img");
            //var thumbNail= children[i].data.thumbNail;
            colElement.setAttribute("class", "col-3");
            rowElement.appendChild(colElement);
            colElement.appendChild(h2Element);
            colElement.appendChild(h3Element);
            
            //colElement.appendChild(imgElement);

            //h2Element.innerHTML=children[i].data.selftext;
            h2Element.innerHTML=children[i].data.title;
            h3Element.innerHTML=children[i].data.author;
            //imgElement.setAttribute("src",thumbNail);

        }
    }
})

