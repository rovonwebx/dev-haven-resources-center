
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Database, Code, BookOpen, Target } from "lucide-react";

const InterviewQuestions = () => {
  const sqlQuestions = [
    {
      id: 1,
      question: "What is SQL?",
      answer: "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases.",
      category: "Basics"
    },
    {
      id: 2,
      question: "What is a primary key?",
      answer: "A primary key is a field (or combination of fields) that uniquely identifies each record in a table. It cannot contain NULL values and must have unique entries.",
      category: "Keys"
    },
    {
      id: 3,
      question: "What is a foreign key?",
      answer: "A foreign key is a field (or combination of fields) in one table that refers to the primary key in another table, establishing a relationship between the two tables.",
      category: "Keys"
    },
    {
      id: 4,
      question: "What are constraints in SQL?",
      answer: "Constraints are rules applied to table columns to enforce data integrity. Common constraints include: PRIMARY KEY (uniquely identifies each record), FOREIGN KEY (enforces referential integrity), UNIQUE (ensures all values in a column are distinct), CHECK (ensures that values in a column satisfy a specific condition), NOT NULL (ensures a column cannot have NULL values), DEFAULT (specifies a default value for a column).",
      category: "Constraints"
    },
    {
      id: 5,
      question: "Write a query to retrieve all records from a table named employees.",
      answer: "SELECT * FROM employees;",
      code: "SELECT * FROM employees;",
      explanation: "This query selects and displays all columns and rows from the employees table.",
      category: "Basic Queries"
    },
    {
      id: 6,
      question: "What is the difference between DELETE and TRUNCATE?",
      answer: "DELETE: Removes rows from a table based on a condition. It can be rolled back (transaction-safe) and triggers can be invoked. TRUNCATE: Removes all rows from a table, resetting the identity column. It is faster but cannot be rolled back and does not invoke triggers.",
      category: "DML Commands"
    },
    {
      id: 7,
      question: "How do you find the maximum salary from an employees table?",
      answer: "SELECT MAX(salary) FROM employees;",
      code: "SELECT MAX(salary) FROM employees;",
      explanation: "This query returns the highest salary from the employees table.",
      category: "Aggregate Functions"
    },
    {
      id: 8,
      question: "Write a query to fetch the second-highest salary from the employees table.",
      answer: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
      code: "SELECT MAX(salary) FROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);",
      explanation: "The subquery finds the maximum salary, and the outer query finds the highest salary that is less than that value (i.e., the second-highest salary).",
      category: "Subqueries"
    },
    {
      id: 9,
      question: "What is a JOIN? Explain its types.",
      answer: "A JOIN clause is used to combine rows from two or more tables based on a related column. Types of joins: INNER JOIN (returns rows with matching values in both tables), LEFT JOIN (returns all rows from the left table and matching rows from the right), RIGHT JOIN (returns all rows from the right table and matching rows from the left), FULL JOIN (returns rows when there is a match in either table), CROSS JOIN (returns the Cartesian product of both tables).",
      category: "Joins"
    },
    {
      id: 10,
      question: "Write a query to fetch employee names and department names using JOIN.",
      answer: "SELECT e.name, d.department_name FROM employees e JOIN departments d ON e.department_id = d.id;",
      code: "SELECT e.name, d.department_name\nFROM employees e\nJOIN departments d\nON e.department_id = d.id;",
      explanation: "This query joins the employees table with the departments table based on the department_id, displaying employee names and their corresponding department names.",
      category: "Joins"
    },
    {
      id: 11,
      question: "What is a GROUP BY clause in SQL?",
      answer: "The GROUP BY clause groups rows with the same values into summary rows. It is commonly used with aggregate functions like COUNT(), SUM(), AVG(), etc.",
      category: "Grouping"
    },
    {
      id: 12,
      question: "Write a query to count employees in each department.",
      answer: "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;",
      code: "SELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id;",
      explanation: "This query groups employees by department_id and counts the number of employees in each department.",
      category: "Grouping"
    },
    {
      id: 13,
      question: "What is the difference between WHERE and HAVING clauses?",
      answer: "WHERE: Filters rows before grouping (applies to individual rows). HAVING: Filters groups after the GROUP BY clause (applies to aggregate functions).",
      category: "Filtering"
    },
    {
      id: 14,
      question: "Write a query to fetch departments with more than 5 employees.",
      answer: "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 5;",
      code: "SELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 5;",
      explanation: "The query counts employees in each department and returns departments with more than 5 employees.",
      category: "Filtering"
    },
    {
      id: 15,
      question: "Explain UNION and UNION ALL.",
      answer: "UNION: Combines results of two or more SELECT statements and removes duplicates. UNION ALL: Combines results and keeps all duplicates.",
      category: "Set Operations"
    },
    {
      id: 16,
      question: "What is a subquery in SQL?",
      answer: "A subquery is a query nested within another query. It is used to retrieve data that will be passed into the outer query.",
      category: "Subqueries"
    },
    {
      id: 17,
      question: "Write a query to find all employees whose salary is greater than the average salary.",
      answer: "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
      code: "SELECT *\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);",
      explanation: "This query selects all employees with a salary higher than the average salary of all employees.",
      category: "Subqueries"
    },
    {
      id: 18,
      question: "What is the difference between INNER JOIN and OUTER JOIN?",
      answer: "INNER JOIN: Returns rows with matching values in both tables. OUTER JOIN (Left/Right/Full): Returns matching rows plus non-matching rows from one or both tables.",
      category: "Joins"
    },
    {
      id: 19,
      question: "Write a query to fetch the current date in SQL.",
      answer: "SELECT CURRENT_DATE;",
      code: "SELECT CURRENT_DATE;",
      explanation: "This query retrieves the current date from the database.",
      category: "Date Functions"
    },
    {
      id: 20,
      question: "What is indexing in SQL?",
      answer: "Indexing improves the speed of data retrieval by creating a data structure (index) on one or more columns of a table.",
      category: "Performance"
    },
    {
      id: 21,
      question: "What is normalization? Explain its types (1NF, 2NF, 3NF, BCNF).",
      answer: "Normalization is the process of organizing data to reduce redundancy and improve data integrity. Forms: 1NF (Eliminate duplicate columns and create tables for related data), 2NF (Remove partial dependencies - columns depend on a part of a composite key), 3NF (Remove transitive dependencies - non-key columns depend on other non-key columns), BCNF (A stricter version of 3NF where every determinant must be a candidate key).",
      category: "Database Design"
    },
    {
      id: 22,
      question: "What is denormalization?",
      answer: "Denormalization is the process of combining normalized tables to improve performance at the cost of introducing redundancy.",
      category: "Database Design"
    },
    {
      id: 23,
      question: "Write a query to add a new column email to the employees table.",
      answer: "ALTER TABLE employees ADD COLUMN email VARCHAR(255);",
      code: "ALTER TABLE employees ADD COLUMN email VARCHAR(255);",
      explanation: "This query adds a new email column to the employees table.",
      category: "DDL Commands"
    },
    {
      id: 24,
      question: "What is a stored procedure in SQL?",
      answer: "A stored procedure is a set of SQL statements that can be stored in the database and executed as a program to perform a specific task.",
      category: "Procedures"
    },
    {
      id: 25,
      question: "Write a basic stored procedure to fetch all employees.",
      answer: "CREATE PROCEDURE GetAllEmployees() BEGIN SELECT * FROM employees; END;",
      code: "CREATE PROCEDURE GetAllEmployees()\nBEGIN\n    SELECT * FROM employees;\nEND;",
      explanation: "This procedure retrieves all records from the employees table when executed.",
      category: "Procedures"
    },
    {
      id: 26,
      question: "What are triggers in SQL?",
      answer: "Triggers are special procedures that are automatically executed (or \"triggered\") in response to certain events (INSERT, UPDATE, DELETE) on a table.",
      category: "Triggers"
    },
    {
      id: 27,
      question: "Write a query to create a trigger that logs any delete action on the employees table.",
      answer: "CREATE TRIGGER log_delete AFTER DELETE ON employees FOR EACH ROW BEGIN INSERT INTO log_table(action, emp_id, log_time) VALUES('DELETE', OLD.id, NOW()); END;",
      code: "CREATE TRIGGER log_delete\nAFTER DELETE ON employees\nFOR EACH ROW\nBEGIN\n    INSERT INTO log_table(action, emp_id, log_time)\n    VALUES('DELETE', OLD.id, NOW());\nEND;",
      explanation: "This trigger logs the deletion of any employee by recording the action and employee ID in the log_table.",
      category: "Triggers"
    },
    {
      id: 28,
      question: "What is a VIEW in SQL?",
      answer: "A VIEW is a virtual table based on the result set of an SQL query. It does not store the data itself but provides a way to simplify complex queries.",
      category: "Views"
    },
    {
      id: 29,
      question: "Write a query to create a view for employees with salary greater than 50,000.",
      answer: "CREATE VIEW HighSalaryEmployees AS SELECT * FROM employees WHERE salary > 50000;",
      code: "CREATE VIEW HighSalaryEmployees AS\nSELECT * FROM employees WHERE salary > 50000;",
      explanation: "This creates a view that shows only employees with salaries above 50,000.",
      category: "Views"
    },
    {
      id: 30,
      question: "What is the difference between VIEW and TABLE?",
      answer: "A TABLE stores data physically, while a VIEW is a virtual representation that dynamically pulls data from one or more tables without storing it.",
      category: "Views"
    },
    {
      id: 31,
      question: "What is an aggregate function? Provide examples.",
      answer: "Aggregate functions perform calculations on a set of values and return a single value. Examples include: COUNT() (counts the number of rows), SUM() (sums up a numeric column), AVG() (calculates the average of a numeric column), MAX() (returns the maximum value), MIN() (returns the minimum value).",
      category: "Aggregate Functions"
    },
    {
      id: 32,
      question: "Write a query to calculate the total salary for each department.",
      answer: "SELECT department_id, SUM(salary) FROM employees GROUP BY department_id;",
      code: "SELECT department_id, SUM(salary)\nFROM employees\nGROUP BY department_id;",
      explanation: "This query sums the salaries for each department, grouping by department_id.",
      category: "Aggregate Functions"
    },
    {
      id: 33,
      question: "Explain the DISTINCT keyword in SQL.",
      answer: "The DISTINCT keyword is used to return unique values from a column, eliminating duplicate entries from the result set.",
      category: "Data Retrieval"
    },
    {
      id: 34,
      question: "Write a query to find distinct job titles from the employees table.",
      answer: "SELECT DISTINCT job_title FROM employees;",
      code: "SELECT DISTINCT job_title FROM employees;",
      explanation: "This query retrieves unique job titles from the employees table.",
      category: "Data Retrieval"
    },
    {
      id: 35,
      question: "What are the ACID properties in SQL?",
      answer: "ACID properties ensure reliable processing of database transactions: Atomicity (ensures that all parts of a transaction are completed successfully or none at all), Consistency (ensures the database remains in a valid state before and after the transaction), Isolation (ensures transactions do not affect each other's execution), Durability (ensures that once a transaction is committed, it remains permanent, even in the event of a failure).",
      category: "Transactions"
    },
    {
      id: 36,
      question: "What is a transaction in SQL?",
      answer: "A transaction is a sequence of one or more SQL operations treated as a single unit of work, ensuring data integrity.",
      category: "Transactions"
    },
    {
      id: 37,
      question: "Explain COMMIT, ROLLBACK, and SAVEPOINT.",
      answer: "COMMIT: Saves all changes made during the current transaction. ROLLBACK: Undoes changes made during the current transaction, restoring the database to its previous state. SAVEPOINT: Sets a point within a transaction to which you can later roll back.",
      category: "Transactions"
    },
    {
      id: 38,
      question: "Write a query to start a transaction, update a record, and commit it.",
      answer: "START TRANSACTION; UPDATE employees SET salary = 60000 WHERE id = 1; COMMIT;",
      code: "START TRANSACTION;\nUPDATE employees SET salary = 60000 WHERE id = 1;\nCOMMIT;",
      explanation: "This sequence starts a transaction, updates an employee's salary, and commits the change.",
      category: "Transactions"
    },
    {
      id: 39,
      question: "What is a CASE statement in SQL?",
      answer: "A CASE statement is used to perform conditional logic in SQL queries, allowing different outputs based on specified conditions.",
      category: "Conditional Logic"
    },
    {
      id: 40,
      question: "Write a query using CASE to categorize employees by salary.",
      answer: "SELECT name, CASE WHEN salary > 50000 THEN 'High' WHEN salary BETWEEN 30000 AND 50000 THEN 'Medium' ELSE 'Low' END AS salary_category FROM employees;",
      code: "SELECT name,\n    CASE\n        WHEN salary > 50000 THEN 'High'\n        WHEN salary BETWEEN 30000 AND 50000 THEN 'Medium'\n        ELSE 'Low'\n    END AS salary_category\nFROM employees;",
      explanation: "This query categorizes employees based on their salary levels.",
      category: "Conditional Logic"
    },
    {
      id: 41,
      question: "Explain NULL values in SQL.",
      answer: "NULL represents the absence of a value in a database. It is not equivalent to zero or an empty string and is treated differently in comparisons.",
      category: "Data Types"
    },
    {
      id: 42,
      question: "Write a query to fetch records where email is NULL.",
      answer: "SELECT * FROM employees WHERE email IS NULL;",
      code: "SELECT * FROM employees WHERE email IS NULL;",
      explanation: "This query retrieves all employees whose email address is not provided (i.e., is NULL).",
      category: "Data Types"
    },
    {
      id: 43,
      question: "What is the COALESCE function in SQL?",
      answer: "The COALESCE function returns the first non-NULL value in a list of expressions.",
      category: "Functions"
    },
    {
      id: 44,
      question: "Write a query using COALESCE to handle NULL values in a column.",
      answer: "SELECT name, COALESCE(email, 'No Email') AS email_address FROM employees;",
      code: "SELECT name, COALESCE(email, 'No Email') AS email_address\nFROM employees;",
      explanation: "This query returns employee names and their email addresses, replacing NULL emails with 'No Email'.",
      category: "Functions"
    }
  ];

  const categories = [
    "Basics", "Keys", "Constraints", "Basic Queries", "DML Commands", 
    "Aggregate Functions", "Subqueries", "Joins", "Grouping", "Filtering",
    "Set Operations", "Date Functions", "Performance", "Database Design",
    "DDL Commands", "Procedures", "Triggers", "Views", "Data Retrieval",
    "Transactions", "Conditional Logic", "Data Types", "Functions"
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Basics": "bg-blue-100 text-blue-800",
      "Keys": "bg-green-100 text-green-800",
      "Constraints": "bg-purple-100 text-purple-800",
      "Basic Queries": "bg-orange-100 text-orange-800",
      "DML Commands": "bg-red-100 text-red-800",
      "Aggregate Functions": "bg-yellow-100 text-yellow-800",
      "Subqueries": "bg-indigo-100 text-indigo-800",
      "Joins": "bg-pink-100 text-pink-800",
      "Grouping": "bg-cyan-100 text-cyan-800",
      "Filtering": "bg-emerald-100 text-emerald-800",
      "Set Operations": "bg-rose-100 text-rose-800",
      "Date Functions": "bg-violet-100 text-violet-800",
      "Performance": "bg-amber-100 text-amber-800",
      "Database Design": "bg-teal-100 text-teal-800",
      "DDL Commands": "bg-lime-100 text-lime-800",
      "Procedures": "bg-sky-100 text-sky-800",
      "Triggers": "bg-fuchsia-100 text-fuchsia-800",
      "Views": "bg-slate-100 text-slate-800",
      "Data Retrieval": "bg-zinc-100 text-zinc-800",
      "Transactions": "bg-stone-100 text-stone-800",
      "Conditional Logic": "bg-neutral-100 text-neutral-800",
      "Data Types": "bg-gray-100 text-gray-800",
      "Functions": "bg-blue-50 text-blue-900"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black mb-1">Interview Questions</h1>
                <p className="text-sm text-gray-600">Top 80 SQL interview questions and answers</p>
              </div>
            </div>
            <Link to="/" className="flex items-center ml-auto">
              <span className="text-sm text-gray-600 mr-2">Back to DHRC</span>
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-8">
          <Card className="border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Master SQL Interviews</h2>
                  <p className="text-gray-700 mb-4">
                    Comprehensive collection of the most frequently asked SQL interview questions. 
                    Perfect for preparing for database developer, data analyst, and backend developer roles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">80+ Questions</Badge>
                    <Badge variant="secondary">Multiple Categories</Badge>
                    <Badge variant="secondary">Code Examples</Badge>
                    <Badge variant="secondary">Detailed Explanations</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-serif text-black mb-4 pb-2 border-b border-gray-300 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-gray-600" />
            Question Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {categories.map((category) => (
              <Badge key={category} className={getCategoryColor(category) + " text-xs py-1 px-2"}>
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300 flex items-center">
            <Code className="w-5 h-5 mr-2 text-gray-600" />
            SQL Interview Questions & Answers
          </h2>
          
          {sqlQuestions.map((item) => (
            <Card key={item.id} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-blue-600 text-sm">Q{item.id}.</span>
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-gray-900">{item.question}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Answer:</h4>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                  
                  {item.code && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">SQL Code:</h4>
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre>{item.code}</pre>
                      </div>
                    </div>
                  )}
                  
                  {item.explanation && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Explanation:</h4>
                      <p className="text-gray-600 text-sm">{item.explanation}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Tips */}
        <Card className="mt-12 border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-black">SQL Interview Preparation Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Before the Interview</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Practice writing queries without IDE assistance</li>
                  <li>• Review database normalization concepts</li>
                  <li>• Understand different types of joins thoroughly</li>
                  <li>• Practice optimizing query performance</li>
                  <li>• Be familiar with your database system specifics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">During the Interview</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Ask for clarification about table structure</li>
                  <li>• Think aloud while writing queries</li>
                  <li>• Consider edge cases and data validation</li>
                  <li>• Explain your approach before coding</li>
                  <li>• Discuss query optimization opportunities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterviewQuestions;
