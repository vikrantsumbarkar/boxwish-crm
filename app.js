console.log("BOXWISH CRM Loaded");

const SHEET_ID = "1CkcLMyoTewq5gnuqzsJI6vCl6YV_k8c4ELCVsZwAL1I";

function generateEnquiryId() {
    const now = new Date();
    return "ENQ-" +
        now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0") +
        "-" +
        Math.floor(Math.random() * 1000);
}
