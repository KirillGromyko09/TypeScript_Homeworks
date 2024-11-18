"use strict";
const universityRecord = {
    students: {
        '1': { id: '1', name: 'Alice', age: 20 },
        '2': { id: '2', name: 'Bob', age: 22 },
        '3': { id: '3', name: 'Charlie', age: 23 },
    },
    grades: {
        '1': { Math: 85, Science: 90, Literature: 78, History: 88 },
        '2': { Math: 95, Science: 85, Literature: 80, History: 82 },
        '3': { Math: 78, Science: 88, Literature: 90, History: 75 },
    }
};
function getStudentGrades(universityRecord, studentId) {
    return universityRecord.grades[studentId];
}
function getAverageGrade(universityRecord, subject) {
    let total = 0;
    let count = 0;
    for (const studentId in universityRecord.grades) {
        if (universityRecord.grades[studentId][subject] !== undefined) {
            total += universityRecord.grades[studentId][subject];
            count++;
        }
    }
    return count > 0 ? total / count : 0;
}
const studentGrades = getStudentGrades(universityRecord, '1');
console.log('Оценки студента с ID 1:', studentGrades);
const averageMathGrade = getAverageGrade(universityRecord, 'Math');
console.log('Средняя оценка по математике:', averageMathGrade);
