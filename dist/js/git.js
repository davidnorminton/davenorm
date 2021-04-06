var git = document.querySelector('#git');
git.addEventListener('click', fetchGitList);
function fetchGitList() {
    fetch('gitList.html', { cache: "no-cache" }).then(function (response) {
        return response.text();
    }).then(function (response) {
        var insert = document.querySelector('#loadedData');
        insert.innerHTML = response;
        var body = document.querySelector("body");
        body.style.overflow = 'hidden';
        if (document.getElementById("close")) {
            var close_1 = document.getElementById("close");
            var insert_1 = document.getElementById("loadedData");
            close_1.addEventListener('click', function () {
                insert_1.innerHTML = "";
                body.style.overflow = 'scroll-y';
            });
        }
    });
}
