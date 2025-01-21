Votify
"Votify" is an easy-to-use online polling system designed for college events, competitions, and audience engagement. It allows event organizers to quickly create polls, where participants can vote on different options in real-time.

Notes from Figma Designer
@amaansyed27 - https://github.com/amaansyed27 Added Figma Link for 3 pages Home, Join, Create - Issue #2
Figma Link - https://www.figma.com/design/RlhrjSkortr6FLQDRyF68k/Votify?node-id=0-1&t=QuPx6rbVaSGWdx2M-1
Guide for figma file:
1. If you are working on any page, refers comments - if functionality added close the comment
2. Make edits in your own figma file, exports are possible from my file
3. More pages to be designed in future
#AcWoC

Key Features:
- Instant Voting: Users can vote on polls quickly and easily through their phones or computers.
- Real-Time Results: As soon as votes are cast, results update live, keeping the audience engaged throughout the event.
- Simple Poll Creation: Organizers can create and manage polls with minimal effort.
- Anti-Cheating Measures: Prevents multiple votes from the same user, ensuring fair results.
- Mobile-Friendly: Designed to be accessible on any device, perfect for events where everyone is on the go.

Building Requirements (MVP)
Core Features
1.	User Voting:
2.	Allow users to vote once per poll.
3.	Track votes via cookies or simple email sign-up.
4.	Poll Creation:
5.	Event organizers can create basic polls with a question and options.
6.	Set a simple timer for each poll (e.g., 5 minutes).
7.	Live Results:
8.	Show results in real-time (use basic JavaScript to update results every few seconds).
9.	Poll Management:
10.	Simple admin dashboard to start and stop polls.
11.	Anti-Cheating:
12.	Limit one vote per user by using cookies or basic login.
Tech Stack
1.	Frontend:
2.	HTML, CSS, and vanilla JavaScript (no need for frameworks like React).
3.	Backend:
4.	Node.js with Express for easy setup and real-time updates using WebSockets.
5.	Database:
6.	Use MongoDB (or even JSON files) to store poll data.
7.	Real-Time Updates:
8.	Use Socket.io for real-time voting results.
9.	Authentication:
10.	Keep it simple: use cookies or email-based login for tracking votes.
Design
1.	UI/UX:
2.	Simple, clean design. Use Figma to create basic wireframes (Home page, Poll page, Results page).
3.	Charts:
4.	Use Chart.js for displaying poll results in real-time (bar or pie chart).
5.	Animations:
6.	Basic transitions like smooth result updates or voting confirmation.

