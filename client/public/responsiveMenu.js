if (typeof window !== 'undefined') {
    let mobile = document.getElementById("clickme").addEventListener("click", () => {
        alert("clicou!")
        let elements = document.getElementsByClassName('item-resp')
        Array.prototype.filter.call(elements, (element) => {
            if (element.style.display == 'none') {
                element.style.display = 'inline-grid'
            } else {
                element.style.display = 'none'
            }
        })
    })
}