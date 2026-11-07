const PASS_MARK = 50;
const MIN_ATTENDANCE = 75;

function getGradeLetter(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    if (average >= PASS_MARK) return "E";
    return "F";
}

function getFinalResult(average, attendance) {
    if (average >= PASS_MARK && attendance >= MIN_ATTENDANCE) {
        return "ناجح (Pass)";
    } else {
        return "يحتاج مراجعة (Needs Review)";
    }
}

document.getElementById("analyzeBtn").addEventListener("click", function () {
    const rawG1 = document.getElementById("grade1").value.trim();
    const rawG2 = document.getElementById("grade2").value.trim();
    const rawG3 = document.getElementById("grade3").value.trim();
    const rawAtt = document.getElementById("attendance").value.trim();
    const reportBox = document.getElementById("reportBox");

    // التحقق من الحقول الفارغة
    if (rawG1 === "" || rawG2 === "" || rawG3 === "" || rawAtt === "") {
        reportBox.style.display = "block";
        reportBox.innerHTML = `<p style="color: red; font-weight: bold;">خطأ: الرجاء عدم ترك أي حقل فارغاً، وإدخال جميع الدرجات.</p>`;
        return;
    }

    const g1 = Number(rawG1);
    const g2 = Number(rawG2);
    const g3 = Number(rawG3);
    const att = Number(rawAtt);

    const grades = [g1, g2, g3];

    // حساب إجمالي الدرجات
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    const average = total / grades.length;
    const letter = getGradeLetter(average);
    const result = getFinalResult(average, att);

    // عرض النتيجة النهائية داخل الـ reportBox
    reportBox.style.display = "block";
    reportBox.innerHTML = `
        <h4>التقرير النهائي:</h4>
        <p>إجمالي الدرجات: <strong>${total}</strong></p>
        <p>المتوسط: <strong>${average.toFixed(1)}</strong></p>
        <p>التقدير: <strong>${letter}</strong></p>
        <p>حالة الطالب: <strong>${result}</strong></p>
    `;
});