
$(document).ready(function() {
	recruiterQuotes = [
	"You are very close to becoming a senior developer. We will promote you in no time.",
	"We don't negotiate.",
	"I can't answer that because of legal reasons.",
	"We only hire rock star devs",
	"I'm hiring and thought that you would be a good fit for the position that I'm trying to fill - details below. Let me know whether you're interested in discussing this opportunity. If you aren't but know someone who is, I'd love a referral!"];

	setQuote();

	$("button").on("click", function() {
		setQuote();
	});

	function setQuote() {
		document.getElementById("quote").innerHTML = recruiterQuotes[Math.floor(Math.random() * recruiterQuotes.length)];
	}
});