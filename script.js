
function login() {
    let username = document.getElementById("username").value;

    if(username === "") {
        alert("Enter username");
        return;
    }

    window.location.href = "dashboard.html";
}
function searchBooks() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.getElementById("bookTable").getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let book = rows[i].getElementsByTagName("td")[0].innerText.toLowerCase();

        if (book.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
function addBook() {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let qty = document.getElementById("quantity").value;

    if(name === "" || author === "" || qty === "") {
        alert("Fill all fields");
        return;
    }

    let book = {
        name: name,
        author: author,
        qty: qty
    };

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));

    alert("Book Added Successfully!");

    window.location.href = "books.html";
}
function issueBook() {
    let student = document.getElementById("student").value;
    let book = document.getElementById("book").value;

    if(student === "" || book === "") {
        alert("Fill all fields");
        return;
    }

    let issue = {
        student: student,
        book: book,
        date: new Date().toLocaleDateString()
    };

    let issued = JSON.parse(localStorage.getItem("issued")) || [];
    issued.push(issue);

    localStorage.setItem("issued", JSON.stringify(issued));

    alert("Book Issued Successfully!");
}
function login() {
    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    if (username === "nehaa" && password === "1234") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login");
    }
}
<<<<<<< HEAD
=======
=======
>>>>>>> 1986c35 (fix)
    
