import { Router } from 'express';
import { BookController } from '../controllers/BookController';

export const createBookRoutes = (controller: BookController): Router => {
  const router = Router();

  router.post('/books/:id/borrow', (req, res) =>
    controller.borrowBook(req, res)
  );

  router.post('/books/:id/return', (req, res) =>
    controller.returnBook(req, res)
  );

  return router;
};
