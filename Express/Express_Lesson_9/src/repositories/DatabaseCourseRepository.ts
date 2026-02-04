import { ICourseRepository } from './interfaces/ICourseRepository';
import { Course } from '../models/Course';

export class DatabaseCourseRepository implements ICourseRepository {
  constructor(private db: any) {}

  async findAll(): Promise<Course[]> {
    return this.db.query('SELECT * FROM courses');
  }

  async findById(id: string): Promise<Course | null> {
    return null;
  }

  async save(course: Course): Promise<void> {}

  async delete(courseId: string): Promise<void> {}

  async enrollStudent(courseId: string, studentId: string): Promise<void> {}

  async findByStudentId(studentId: string): Promise<Course[]> {
    return [];
  }
}
