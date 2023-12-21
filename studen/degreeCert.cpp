#include <ctime>
#include <iomanip>
#include <iostream>
#include <random>
#include <string>
#include <vector>

using namespace std;

struct Subject
{
  string name;
  int degree;
  int gpa;
  string evaluation;
};

struct Semester
{
  string name;
  vector<Subject> subjects;
  int averageDegree;
  int averageGPA;
};

struct Level
{
  string name;
  vector<Semester> semesters;
};

struct Student
{
  string name;
  string nationality;
  int hours;
  int degree;
  int age;
  int gpa;
  vector<Level> levels;
};

string evaluateDegree(int degree)
{
  if (degree < 50)
  {
    return "Failed";
  }
  else if (degree < 60)
  {
    return "Accepted";
  }
  else if (degree < 75)
  {
    return "Good";
  }
  else if (degree < 85)
  {
    return "Very Good";
  }
  else
  {
    return "Excellent";
  }
}

string evaluateGPA(float gpa)
{
  if (gpa == 0)
  {
    return "";
  }
  else if (gpa < 2)
  {
    return "Low";
  }
  else if (gpa < 3)
  {
    return "Below Avg";
  }
  else if (gpa < 3.5)
  {
    return "Avg";
  }
  else if (gpa < 4)
  {
    return "Above Avg";
  }
  else
  {
    return "High";
  }
}

void printTableRow(const Subject &subject1, const Subject &subject2)
{
  cout << "| " << left << setw(15) << subject1.name << "  " << setw(3)
       << subject1.degree << "  " << setw(2) << subject1.gpa << "  " << setw(13)
       << subject1.evaluation << "  ";
  cout << "|" << left << setw(15) << subject2.name << "  " << setw(3)
       << subject2.degree << "  " << setw(2) << subject2.gpa << "  " << setw(13)
       << subject2.evaluation << " |\n";
}

void printTableFooter()
{
  cout << "|___________________________________________________________________"
          "________________|\n";
}

string generateRandomSubjectName()
{
  static vector<string> subjectNames = {
      "Programming:", "Quran:", "Maths:", "History:", "Arabic:", "English:",
      "Statistics:", "Science:", "Design:", "Computer:", "Business:"};

  static random_device rd;
  static mt19937 generator(rd());
  uniform_int_distribution<int> distribution(0, subjectNames.size() - 1);

  return subjectNames[distribution(generator)];
}

int generateRandomDegree()
{
  static random_device rd;
  static mt19937 generator(rd());
  uniform_int_distribution<int> distribution(65, 98);

  return distribution(generator);
}

float calculateGPA(int degree)
{
  if (degree >= 85)
    return 4.0;
  else if (degree >= 75)
    return 3.5;
  else if (degree >= 60)
    return 3.0;
  else if (degree >= 50)
    return 2.0;
  else
    return 0.0;
}

int main()
{
  cout << "____________________________________________________________________"
          "________________\n";
  cout << "|                              {In the name of Allah}               "
          "                |\n";
  cout << "|                                                                   "
          "                |\n";
  cout << "| ---------------                                                   "
          "                |\n";

  Student student;

  student.name = "Haifa.";
  student.hours = 122;
  student.nationality = "Yemen.";
  student.degree = 95;
  student.gpa = 5;
  student.age = 19;

  // Create three levels
  for (int i = 1; i <= 3; ++i)
  {
    Level level;
    level.name = "Level " + to_string(i);

    // Create two semesters for each level
    for (int j = 1; j <= 2; ++j)
    {
      Semester semester;
      semester.name = "Semester: " + to_string(j);

      // Add five subjects to each semester with random degrees
      for (int k = 1; k <= 5; ++k)
      {
        Subject subject;
        subject.name = generateRandomSubjectName();
        subject.degree = generateRandomDegree();
        subject.gpa = calculateGPA(subject.degree);
        subject.evaluation = evaluateDegree(subject.degree);
        semester.subjects.push_back(subject);
      }

      level.semesters.push_back(semester);
    }

    student.levels.push_back(level);
  }

  // Calculate average degree for each level
  for (Level &level : student.levels)
  {
    int totalDegree = 0;
    int numSubjects = 0;

    for (Semester &semester : level.semesters)
    {
      numSubjects += semester.subjects.size();

      for (Subject &subject : semester.subjects)
      {
        totalDegree += subject.degree;
      }
    }

    int averageDegree = totalDegree / numSubjects;
    float averageGPA = calculateGPA(averageDegree);

    for (Semester &semester : level.semesters)
    {
      semester.averageDegree = averageDegree;
      semester.averageGPA = averageGPA;
    }
  }
  cout << "||               |  Name: " << left << setw(13) << student.name
       << "National: " << student.nationality
       << "                      \t\t|\n";
  cout << "||               |  Age: " << setw(2) << student.age
       << "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|\n";
  cout << "||               |  Hours: " << left << setw(10) << student.hours
       << "GPA:(" << student.gpa << "). "
       << "\tDegree:(" << student.degree << "%).\t\t\t\t\t\t|\n";
  cout << "||               |                                                  "
          "                |\n";
  cout << "| ---------------                                                   "
          "                |\n";
  cout << "|___________________________________________________________________"
          "________________|\n";

  for (const Level &level : student.levels)
  {
    cout << "|" << level.name
         << "                                                                  "
            "          |\n";

    for (const Semester &semester : level.semesters)
    {
      cout << "|" << left << setw(15) << semester.name << "   " << setw(5)
           << semester.averageDegree << "" << setw(5) << fixed
           << setprecision(1) << semester.averageGPA << "Excel        ";
    }
    cout << "|\n";
    cout << "|_________________________________________________________________"
            "__________________|\n";
    // printTableHeader();

    const vector<Semester> &semesters = level.semesters;

    for (size_t i = 0; i < semesters[0].subjects.size(); ++i)
    {
      const Subject &subject1 = semesters[0].subjects[i];
      const Subject &subject2 = semesters[1].subjects[i];
      printTableRow(subject1, subject2);
    }

    printTableFooter();
  }
  cout << "\n[program finished]";
  return 0;
}
