import { ICourseRepository } from '../repositories/interfaces/ICourseRepository';

export class CourseService {
  constructor(private courseRepo: ICourseRepository) {}

  async createCourse(course: {
    id: string;
    name: string;
    capacity: number;
  }) {
    await this.courseRepo.save({
      ...course,
      students: []
    });

    return { message: 'Course created successfully' };
  }

  async enroll(courseId: string, studentId: string) {
    if (!studentId) {
      throw new Error('studentId is required');
    }

    const course = await this.courseRepo.findById(courseId);
    if (!course) throw new Error('Course not found');

    if (course.students.length >= course.capacity) {
      throw new Error('Course full');
    }

    await this.courseRepo.enrollStudent(courseId, studentId);
    return { message: 'Enrolled successfully' };
  }

  async getStudentCourses(studentId: string) {
    return this.courseRepo.findByStudentId(studentId);
  }

  // ✅ Challenge 6
  async deleteCourse(courseId: string) {
    const course = await this.courseRepo.findById(courseId);
    if (!course) throw new Error('Course not found');

    await this.courseRepo.delete(courseId);
    return { message: 'Course deleted successfully' };
  }
}
