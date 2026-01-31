//content class
abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public publish() {
    this.published = true;
  }

  protected isPublished(): boolean {
    return this.published;
  }

  // Every content type must say what type it is
  abstract getType(): string;
}

//assignment class
class Assignment extends Content{

    private dueDate: Date | null = null;

    public constructor(title: string, author: string, dueDate?: Date){
        super(title,author);
        if(dueDate) this.dueDate = dueDate;
        
    }
    getType(): string {
        return "Assignment";
    }

    public setDueDate(date :Date, isInstructor: boolean){
        if(!this.isPublished() && isInstructor){
            this.dueDate = date;
        }
        else{
            throw new Error("Cannot set due date after publishing or if not an instructor!");
        }
    }
    public getDueDate(): Date | null{
        return this.dueDate;
    }


}

const assignment = new Assignment(
    "TypeScript Lesson_17",
    "Nandan Sir"
);
assignment.setDueDate(new Date("2026-01-01"),true);
assignment.publish();
console.log(`title: ${assignment.title}, author: ${assignment.author}`);
console.log(`due date: ${assignment.getDueDate()}`);
console.log(`type: ${assignment.getType()}`);