// Lesson 3 - Events Starter

let quotes = []

// Select DOM elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");

function createQuoteElement(quote) {
  // a quote element example
  const id = 0;
  const newElement= document.createElement("div");
  const content = contentInput;
  const author = authorInput;

  newElement.setAttribute("data-id",id);
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>

}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {}
function updateQuoteInDOM(quote) {}
function deleteQuoteFromDOM(id) {}
function renderQuotes() {}
function showRandomQuote() {}
// Event listeners for form submission, edit, and delete clicks
