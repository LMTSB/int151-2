// const okBtn = document.getElementById("okBtn");
// const cancelBtn_1 = document.getElementById("cancelBtn_1");

// okBtn.addEventListener("click", () => { confirmDialog.showModal(); res(okBtn.textContent) })
// cancelBtn_1.addEventListener("click", () => { confirmDialog.showModal(); res(cancelBtn_1.textContent) })


const confirmDialog = document.getElementById("confirmDialog");

const openDialogBtn = document.getElementById("openDialogBtn");

openDialogBtn.addEventListener("click", async () => { 
    const result = await displayDialog();

})

const displayDialog = async () => { // make a button the show a dialog
    return new Promise((resolve) => {
        const messageDialog = document.getElementById("messageDialog");

        const confirmBtn = document.getElementById("confirmBtn");
        const cancelBtn = document.getElementById("cancelBtn");

        confirmBtn.addEventListener("click", () => { messageDialog.close(); resolve(confirmBtn.textContent) })
        cancelBtn.addEventListener("click", () => { messageDialog.close(); resolve(cancelBtn.textContent) })

        return messageDialog.showModal()
    })
};


