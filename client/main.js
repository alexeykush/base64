document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault();
    const files = [...document.getElementById("file").files];
    const formData = new FormData();
    files.forEach(item => formData.append("files", item));
    const options = {
        method: "POST",
        body: formData
    };
    fetch("/images", options)
        .then(res => res.json())
        .then(data => {
            data.images.forEach(item => {
                let image = new Image();
                image.src = "data:image/jpeg;base64," + item;
                document.body.appendChild(image);
            })
        })
});