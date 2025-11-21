//fetch("https://api.github.com/users");

async function github() {
    console.log("Git Hub Link");
    const response = await fetch("https://api.github.com/users");
    if(!response.ok){
        throw new Error("Data is not present");
        
    }
    const data = await response.json();

    try {
        for (let user of data) {
            const parent = document.getElementById("main");
            const element = document.createElement("div");
            element.classList.add("user");

            const img = document.createElement("img");
            img.src = user.avatar_url;

            const userName = document.createElement('h2');
            userName.textContent = user.login;

            const anchor = document.createElement('a');
            anchor.href = user.html_url;
            anchor.textContent = "Visit Profile";


            element.append(img, userName, anchor);

            parent.append(element);

        }
    }
    catch (error) {
        console.log("Error", error);
    }
}


github();