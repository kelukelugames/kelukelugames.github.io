
$(document).ready(function() {
	var recruiterQuotes = [
	"You are very close to becoming a senior developer. We will promote you in no time.",
	"We don't negotiate.",
	"I can't answer that because of legal reasons.",
	"We only hire rock star devs.",
	"How are you? I am wondering if it's possible to continue our conversation about working at Unicorn.",
	"Hope all is well! Just touching base to see how things are going at Unicorn. I know I've periodically reached out over the past year or so, but we are definitely still interested in chatting with you here at Hooli.",
	"Your background is impressive and I would like to connect to learn more about your interests as we are seeking engineers who want to take on and build out various high scalability projects at Hooli.",
	"I hope this note finds you well. I came across your profile on LinkedIn and was impressed with your experience at Unicorn.",
	"Given your experience, I thought you could be a good fit with the team.",
	"You'll get to work with me!",
	"After coming across your profile within our database, I feel that your background and experience is a very good match for a current position search that I am doing here at Hooli. The purpose of me reaching out is to determine if you would be interested in confidentially exploring this opportunity with us.",
	"If you have time this week I would like to share a couple of roles I am currently working. Possibly you may know someone or have an interest. If you would let me know your availability I will coordinate a time to call.",
	"I see you just left Hooli and I'm assuming you have plans already in place? Either way it would be great to connect. I focus on quantitative trading and please check my recommendations if you need assurance of my work.",
	"Not sure if you are open to making a move from Hooli, but we had a few Engineers on our team pull some names and yours was one they were interested in talking to.",
	"We're always looking for great engineers.",
	"Getting into business intelligence is like starting another social network. There are too many. But we are the Hooli of BI.",
	"Everyone is an owner.",
	"Everyone at Unicorn is excited to have you. If you go to Hooli then we can still be friends.",
	"This is the first time I have been asked that question.",
	"Do you know who I am?",
	"We are all owners.",
	"I'm hiring and thought that you would be a good fit for the position that I'm trying to fill - details below. Let me know whether you're interested in discussing this opportunity. If you aren't but know someone who is, I'd love a referral!"];

	var candidateQuotes = [
	"My girlfriend doesn't want to move to California.",
	"I don't know if I can take the bus. I have plantar fascittis.",
	"When are we going public?",
	"I'm not going to lie. Money is important.",
	"Of all the important things, money is the least important.",
	"That's not very competitive. I know lots of companies that pay more.",
	"I'm looking for over 250k.",
	"You forgot to feed me lunch. I would have done a lot better.",
	"I'm tempted to join Hooli, can you please try to match them?",
	"Everyone says I should join your company, but all of my friends who are devs says I should go to Hooli. Why is that?",
	"Is it socially acceptable to eat In n' Out five days in a row?",
	"When can I expect to hear back?",
	"How fast can we move?",
	"How many women are on the team?",
	"Have you published demographics data?",
	"Do you negotiate?",
	"Isn't lunch next?",
	"Do you provide lunch?",
	"My girlfriend and I are starting a family. More compensation would make the decision easier.",
	"What's an example of non-technical feedback you have given to someone?",
	"I'm joining Unicorn because they are going to make me a millionaire.",
	"Can I have a sign on bonus? I need it for my Porsche."];
	
	var candidatePerson = "- candidate -";
	var recruiterPerson = "- recruiter -";

	setQuote();

	$("button").on("click", function() {
		setQuote();
	});

	function setQuote() {
		recruiterQuote = '"' + recruiterQuotes[Math.floor(Math.random() * recruiterQuotes.length)] + '"';
		candidateQuote = '"' + candidateQuotes[Math.floor(Math.random() * candidateQuotes.length)] + '"';

		var swap = (Math.random() > 0.5);

		document.getElementById("quote1").innerHTML = swap ? recruiterQuote : candidateQuote;
		document.getElementById("quote2").innerHTML = swap ? candidateQuote : recruiterQuote;

		document.getElementById("person1").innerHTML = swap ? recruiterPerson : candidatePerson;
		document.getElementById("person2").innerHTML = swap ? candidatePerson : recruiterPerson;
	}
});
