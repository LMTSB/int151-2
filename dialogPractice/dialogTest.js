

const displayDialog = async () => {
    return new Promise((resolve) => {
        const messageDialog = document.getElementById("messageDialog") ;
            
        const confirmBtn = document.getElementById("confirmBtn");
        const cancelBtn = document.getElementById("cancelBtn");
        
        confirmBtn.addEventListener("click", () => {messageDialog.close(); resolve(confirmBtn.textContent)})
        cancelBtn.addEventListener("click", () => {messageDialog.close();  resolve(cancelBtn.textContent)})

        messageDialog.showModal()
    })
};

const result = await displayDialog();
console.log(result)