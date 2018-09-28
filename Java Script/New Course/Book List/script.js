// Submit button add event listener
document.querySelector("#book-form").addEventListener("submit",function(e){
    // Get form values
    const title =  document.querySelector("#title-book").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector('#isbn').value;

    // Instantiate book
    const book = new Book();

    // Instantiate UI
    const ui = new UI();

    // Validate 
    if (title ===''|| author === '' || isbn === ''){
        ui.showAlert('Please, fill all fields', 'error')
    }
    else{
        ui.addBook(book);
        ui.showAlert('Book was added', 'success');
        ui.clearFields();
    }
    e.preventDefault();
});


//Delete Book event listener
document.querySelector("#book-list").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book was deleted','error');
});


//  Book data structure  
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{

    // Get Variables 
    getVariables() {
        const title =  document.querySelector("#title-book").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector('#isbn').value;
        return title,author,isbn;
    };

    // addBookList method
    addBook(book){
    const list = document.querySelector('#book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
     list.appendChild(row);
  }
    //Delete book
    deleteBook(target){ 
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
            }
        }
  // Show ALert
    showAlert(message, className){
        //create div
        const div = document.createElement('div');
        div.className =`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const form = document.querySelector('#book-form');
        const container = document.querySelector('.container');
        container.insertBefore(div, form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
    
    //Clear fields
    clearFields(){
        document.querySelector("#title-book").value = '';
        document.querySelector("#author").value = '';
        document.querySelector('#isbn').value = '';

    }
          
}

