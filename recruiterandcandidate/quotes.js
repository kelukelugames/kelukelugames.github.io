
$(document).ready(function() {
	recruiterQuotes = [
	"You are very close to becoming a senior developer. We will promote you in no time.",
	"We don't negotiate.",
	"I can't answer that because of legal reasons.",
	"We only hire rock star devs.",
	"How are you? I am wondering if it's possible to continue our conversation about working at Unicorn.",
	"Hope all is well! Just touching base to see how things are going at Unicorn. I know I’ve periodically reached out over the past year or so, but we are definitely still interested in chatting with you here at Hooli.",
	"Your background is impressive and I would like to connect to learn more about your interests as we are seeking engineers who want to take on and build out various high scalability projects at Hooli.",
	"I hope this note finds you well. I came across your profile on LinkedIn and was impressed with your experience at Unicorn.",
	"Given your experience, I thought you could be a good fit with the team.",
	"You'll get to work with me!",
	"After coming across your profile within our database, I feel that your background and experience is a very good match for a current position search that I am doing here at Hooli. The purpose of me reaching out is to determine if you would be interested in confidentially exploring this opportunity with us.",
	"If you have time this week I would like to share a couple of roles I am currently working. Possibly you may know someone or have an interest. If you would let me know your availability I will coordinate a time to call.",
	"I see you just left Hooli and I'm assuming you have plans already in place? Either way it would be great to connect. I focus on quantitative trading and please check my recommendations if you need assurance of my work.",
	"Not sure if you open to making a move from Hooli, but we had a few Engineers on our team (Transaction Services) pull some names and yours was one they were interested in talking to.",
	"we're always looking for great engineers.",
	"I work at Hooli with Chris C (CYC), and speaks very highly of you. He also mentioned that you've done great programming work (I'm curious about your interest in open source, we're a python shop) and that you could be an awesome fit for what we're doing here! I would love to chat with you about where Counsyl is going, and even show you around if you'd like to take a look at the lab and see what were doing! Here is some information on Hooli as well (please also click the links in my signature!)",
	"I'm hiring and thought that you would be a good fit for the position that I'm trying to fill - details below. Let me know whether you're interested in discussing this opportunity. If you aren't but know someone who is, I'd love a referral!"];

	candidateQuotes = [
	"My girlfriend doesn't want to move to California.",
	"Can I have a sign on bonus? I need it for my Porsche."];
	setQuote();

	$("button").on("click", function() {
		setQuote();
	});

	function setQuote() {
		var threshold = recruiterQuotes.length / (recruiterQuotes.length + candidateQuotes.length);
		if (Math.random() < threshold) {
			document.getElementById("header").innerHTML = "a recruiter says";
			document.getElementById("quote").innerHTML = '"' + recruiterQuotes[Math.floor(Math.random() * recruiterQuotes.length)] + '"';
		} else {
			document.getElementById("header").innerHTML = "a candidate says";
			document.getElementById("quote").innerHTML = '"' + candidateQuotes[Math.floor(Math.random() * candidateQuotes.length)] + '"';
		}
	}
});