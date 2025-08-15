class Util {
    
    getDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}-${month}-${year}`;
    }


    getPIValue() {
        return Math.PI;
    }
}


const util = new Util();


document.getElementById("today").textContent = "Today's Date: " + util.getDate();
document.getElementById("piValue").textContent = "Value of PI: " + util.getPIValue();
