import { Router } from 'express';
import { CourseService } from '../services/CourseService';

export function courseRouter(courseService: CourseService) {
  const router = Router();

  // ✅ Create course (admin)
  router.post('/admin/courses', async (req, res) => {
    try {
      const result = await courseService.createCourse(req.body);
      res.status(201).json(result);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  });

  // ✅ Enroll student
  router.post('/courses/:id/enroll', async (req, res) => {
    try {
      const result = await courseService.enroll(
        req.params.id,
        req.body.studentId
      );
      res.json(result);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  });

  // ✅ Get student courses
  router.get('/students/:id/courses', async (req, res) => {
    const courses = await courseService.getStudentCourses(req.params.id);
    res.json(courses);
  });

  // ✅ Delete course (Challenge 6)
  router.delete('/admin/courses/:id', async (req, res) => {
    try {
      const result = await courseService.deleteCourse(req.params.id);
      res.json(result);
    } catch (e: any) {
      res.status(404).json({ error: e.message });
    }
  });

  return router;
}
