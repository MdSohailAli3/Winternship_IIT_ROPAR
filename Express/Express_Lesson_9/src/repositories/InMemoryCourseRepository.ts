import { ICourseRepository } from './interfaces/ICourseRepository';
import { Course } from '../models/Course';

export class InMemoryCourseRepository implements ICourseRepository {
  private courses: Course[] = [];

  async findAll(): Promise<Course[]> {
    return this.courses;
  }

  async findById(id: string): Promise<Course | null> {
    return this.courses.find(c => c.id === id) || null;
  }

  async save(course: Course): Promise<void> {
    const index = this.courses.findIndex(c => c.id === course.id);
    if (index >= 0) {
      this.courses[index] = course;
    } else {
      this.courses.push(course);
    }
  }

  async delete(courseId: string): Promise<void> {
    this.courses = this.courses.filter(c => c.id !== courseId);
  }

  async enrollStudent(courseId: string, studentId: string): Promise<void> {
    const course = await this.findById(courseId);
    if (!course) return;

    if (!course.students.includes(studentId)) {
      course.students.push(studentId);
    }
  }

  async findByStudentId(studentId: string): Promise<Course[]> {
    return this.courses.filter(c =>
      c.students.includes(studentId)
    );
  }
}
