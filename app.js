import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
       [ React.createElement("h1",{},"hello this is sahana" ), React.createElement("h2",{},"hiii" )]
    )],React.createElement("div",{id:"child2"},
       [ React.createElement("h1",{},"hello this is sahana" ), React.createElement("h2",{},"hiii" )]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);
