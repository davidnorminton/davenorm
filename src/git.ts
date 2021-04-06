let git = document.querySelector<HTMLElement>('#git');

git.addEventListener('click', fetchGitList);

function fetchGitList() {
    fetch('gitList.html', 
		{cache: "no-cache"}
	).then(function(response) {
        return response.text();
    }).then(function(response) {

        let insert = document.querySelector<HTMLElement>('#loadedData');
        insert.innerHTML = response;
        
        const body: HTMLElement = document.querySelector("body");
        body.style.overflow = 'hidden'
        
        if (document.getElementById("close")) {

            let close = document.getElementById("close");
            let insert = document.getElementById("loadedData");

            close.addEventListener('click', function() {
                insert.innerHTML = "";
                body.style.overflow = 'scroll-y';                
            });

        }     
});
}