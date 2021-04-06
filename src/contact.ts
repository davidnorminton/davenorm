const contactForm: HTMLFormElement = document.querySelector('#contact-form');

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const result = await fetch('/mail.php', {
      method: 'POST',
      body: new URLSearchParams([...(new FormData(form) as any)])
    })
    .then((response: Response) => response.json())
    .then(response => {
        let resp: string = JSON.stringify(response);
        handleResponse(JSON.parse(resp))
    });
});


function handleResponse(resp: string[]) {

	if(resp['error']) {
		resp['error'].forEach(function(error: string) {
			console.log(error)
		})
	}
}
