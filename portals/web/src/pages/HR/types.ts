export type EmployeeStatus =
  | "Available"
  | "Busy"
  | "Training"
  | "Needs Approval";

export interface Employee {
  id: string;
  employeeId: string;

  firstName: string;
  lastName: string;

  title: string;

  department: string;

  description: string;
}

export interface HumanEmployee extends Employee {
  manager: string;
  email: string;
}

export interface AIEmployee extends Employee {
  supervisingHuman: string;

  model: string;

  autonomyLevel: number;

  status: EmployeeStatus;
}
