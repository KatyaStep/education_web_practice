// Submit button add event listener
document.querySelector("#book-form").addEventListener("submit",function(e){
    // Instantiate UI
    const ui = new UI();
    // Get variables from ui methods
    const title = ui.getTitle();
    const author = ui.getAuthor();
    const isbn = ui.getIsbn();

    // Instantiate book
    const book = new Book(title,author,isbn);

    // If validate is true 
    if (ui.validate()){
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
    ui.showAlert('Book was deleted','success');
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

    // Get Title
    getTitle(){
        return document.querySelector("#title-book").value;
    }
    //Get Author
    getAuthor(){
        return document.querySelector("#author").value;
    }
    // Get ISBN
    getIsbn(){
        return document.querySelector('#isbn').value;
    }
    //Validate 
    validate(){
        const uiTitle = this.getTitle();
        const uiAuthor = this.getAuthor();
        const uiIsbn = this.getIsbn();
        if (uiTitle ===''|| uiAuthor === '' || uiIsbn === ''){
            this.showAlert('Please, fill all fields', 'error');
        }
        else{
            return true;
        }

    }

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

