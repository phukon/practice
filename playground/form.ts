export type QuestionType = "short" | "long" | "single" | "number" | "url";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  required: boolean;
  options?: string[]; // For single select questions
}

export interface FormData {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  published?: boolean;
}

export interface FormResponse {
  [key: string]: string | number; // questionId: answer
}

// Base Question Class
abstract class BaseQuestion {
  protected id: string;
  protected abstract type: QuestionType;
  protected question: string;
  protected required: boolean;

  constructor(question: string, required: boolean = false) {
    this.id = crypto.randomUUID();
    this.question = question;
    this.required = required;
  }

  abstract validate(value: any): boolean;

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      question: this.question,
      required: this.required,
    };
  }
}

// Specific Question Types
class ShortAnswerQuestion extends BaseQuestion {
  private maxLength?: number;
  protected type: QuestionType = "short";

  constructor(question: string, required: boolean = false, maxLength?: number) {
    super(question, required);
    this.maxLength = maxLength;
  }

  validate(value: string): boolean {
    if (this.required && !value) return false;
    if (this.maxLength && value.length > this.maxLength) return false;
    return true;
  }
}

// Add LongAnswerQuestion
class LongAnswerQuestion extends BaseQuestion {
  protected type: QuestionType = "long";
  constructor(question: string, required: boolean = false) {
    super(question, required);
  }

  validate(value: string): boolean {
    if (this.required && !value) return false;
    return true;
  }
}

// Add NumberQuestion
class NumberQuestion extends BaseQuestion {
  private min?: number;
  private max?: number;
  protected type: QuestionType = "number";
  constructor(
    question: string,
    required: boolean = false,
    min?: number,
    max?: number,
  ) {
    super(question, required);
    this.min = min;
    this.max = max;
  }

  validate(value: number): boolean {
    if (this.required && value === undefined) return false;
    if (this.min !== undefined && value < this.min) return false;
    if (this.max !== undefined && value > this.max) return false;
    return true;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      min: this.min,
      max: this.max,
    };
  }
}

// Add URLQuestion
class URLQuestion extends BaseQuestion {
  protected type: QuestionType = "url";
  constructor(question: string, required: boolean = false) {
    super(question, required);
  }

  validate(value: string): boolean {
    if (this.required && !value) return false;
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }
}

// Modify SingleSelectQuestion to include options in toJSON
class SingleSelectQuestion extends BaseQuestion {
  private options: string[];
  protected type: QuestionType = "single";
  constructor(question: string, options: string[], required: boolean = false) {
    super(question, required);
    this.options = options;
  }

  validate(value: string): boolean {
    if (this.required && !value) return false;
    return this.options.includes(value);
  }

  addOption(option: string): void {
    this.options.push(option);
  }

  removeOption(index: number): void {
    this.options.splice(index, 1);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      options: this.options,
    };
  }
}

class Form {
  private id: string;
  private title: string;
  private description: string;
  private questions: BaseQuestion[];
  private published: boolean;

  constructor(title: string, description: string = "") {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.questions = [];
    this.published = false;
  }

  addQuestion(question: BaseQuestion): void {
    this.questions.push(question);
  }

  removeQuestion(index: number): void {
    this.questions.splice(index, 1);
  }

  publish(): void {
    this.published = true;
  }

  toJSON(): FormData {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      questions: this.questions.map((q) => q.toJSON()),
    };
  }
}

export {
  BaseQuestion,
  ShortAnswerQuestion,
  LongAnswerQuestion,
  SingleSelectQuestion,
  NumberQuestion,
  URLQuestion,
  Form,
};

// Create a new form
const surveyForm = new Form("Customer Feedback", "Please share your thoughts");

// Add different types of questions
const nameQuestion = new ShortAnswerQuestion("What is your name?", true, 50); // required, max 50 chars
const experienceQuestion = new SingleSelectQuestion(
  "How was your experience?",
  ["Excellent", "Good", "Fair", "Poor"],
  true, // required
);

const urlQ = new URLQuestion("Yo wassup");

// Add questions to form
surveyForm.addQuestion(nameQuestion);
surveyForm.addQuestion(experienceQuestion);
surveyForm.addQuestion(urlQ);

// When ready to use
surveyForm.publish();

// Get form data
const formData = surveyForm.toJSON();
console.log("data ⚡", JSON.stringify(formData));
