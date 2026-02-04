import express from 'express';
import { InMemoryBookRepository } from './repositories/InMemoryBookRepository';
import { BookService } from './services/BookService';
import { BookController } from './controllers/BookController';
import { createBookRoutes } from './routes/book.routes';

const app = express();
app.use(express.json());

// Dependency Injection
const bookRepository = new InMemoryBookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

//temporary book for testing
bookRepository.save({
  id: '1',
  title: 'Clean Code',
  author: 'Robert C. Martin',
  isBorrowed: false
});


// Routes
app.use(createBookRoutes(bookController));

export default app;
