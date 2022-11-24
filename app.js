const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
   const request = new XMLHttpRequest();
   request.open("Get", "date.json");
   request.setRequestHeader("Content-type", "application/json");
   request.send();
    console.log(JSON.parse(request.response));
    const date = JSON.parse(request.response);
    document.querySelector(".userId").innerHTML=date.userID;
    document.querySelector(".Id").innerHTML=date.id;
    document.querySelector(".title").innerHTML=date.title;
    document.querySelector(".body").innerHTML=date.body;
});

const obj={
    userId: 5,
    id: 43,
    title: "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
    body: "similique fugit est illum et dolorum harum et voluptate eaque quidem exercitationem quos nam commodi possimus cum odio nihil nulla dolorum exercitationem magnam ex et a et distinctio debitis"
};
console.log(obj);
const date= JSON.stringify(obj);
console.log(date, "stringify");
console.log(JSON.parse(date), "parse");