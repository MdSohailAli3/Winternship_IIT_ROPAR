import express from 'express';
import { InMemoryCourseRepository } from './repositories/InMemoryCourseRepository';
import { CourseService } from './services/CourseService';
import { courseRouter } from './routes/course.routes';

const app = express();
app.use(express.json());

// Repository & Service
const courseRepo = new InMemoryCourseRepository();
const courseService = new CourseService(courseRepo);

// ✅ REGISTER ROUTES (this line fixes 404)
app.use('/', courseRouter(courseService));

// Optional health check
app.get('/health', (_, res) => {
  res.json({ status: 'OK' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
