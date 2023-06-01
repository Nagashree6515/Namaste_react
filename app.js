const root = ReactDOM.createRoot(
    document.getElementById("root")
    );

    

const parentDiv=React.createElement("div",
{id:"parent"},
[
    React.createElement("div",
{id:"child1"},
    [React.createElement("h2",
{id:"child11"},"i'm child1 hedaing"),

React.createElement("p",
{id:"child12"},"i'm child1 para")]),

React.createElement("div",
{id:"child2"},
   [React.createElement("h2",
   {id:"child21"}," I'm child2 heading"),

   React.createElement("p",
{id:"child22"},"I'm child2 para")]
)
]
);

root.render(parentDiv);



