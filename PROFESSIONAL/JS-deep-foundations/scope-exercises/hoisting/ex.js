var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

function getStudentFromId(studentId) {
  return studentRecords.find(function matchId(record) {
    return record.id == studentId;
  });
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudentFromId);

  records.sort(sortByNameAsc);

  records.forEach(printRecord);
}

function sortByNameAsc(record1, record2) {
  if (record1.name < record2.name) return -1;
  else if (record1.name > record2.name) return 1;
  else return 0;
}

function printRecord(record) {
  console.log(
    `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
  );
}

function needToEnroll(record) {
  return record.paid && !currentEnrollment.includes(record.id);
}
function getStudentId(record) {
  return record.id;
}

function paidStudentsToEnroll() {
  var recordsToEnroll = studentRecords.filter(needToEnroll);

  var idsToEnroll = recordsToEnroll.map(getStudentId);

  return [...currentEnrollment, ...idsToEnroll];
}

function notYetPaid(studentId) {
  var record = getStudentFromId(studentId);
  return !record.paid;
}

function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(notYetPaid);

  printRecords(unpaidIds);
}

// ********************************
